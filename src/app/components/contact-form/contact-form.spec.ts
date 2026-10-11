import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mailer } from '../../core/mailer';
import { ContactForm } from './contact-form';

describe('ContactForm', () => {
  let fixture: ComponentFixture<ContactForm>;
  let element: HTMLElement;
  let send: ReturnType<typeof vi.fn<Mailer['send']>>;

  beforeEach(async () => {
    localStorage.setItem('lang', 'en');
    send = vi.fn<Mailer['send']>();
    TestBed.configureTestingModule({
      imports: [ContactForm],
      providers: [{ provide: Mailer, useValue: { send } }],
    });
    fixture = TestBed.createComponent(ContactForm);
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  afterEach(() => localStorage.clear());

  function fill(id: string, value: string): void {
    const field = element.querySelector<HTMLInputElement>(`#${id}`)!;
    field.value = value;
    field.dispatchEvent(new Event('input'));
  }

  function fillValidForm(): void {
    fill('contact-name', 'Ada');
    fill('contact-email', 'ada@example.com');
    fill('contact-message', 'Hello');
  }

  async function submit(): Promise<void> {
    element.querySelector('form')!.dispatchEvent(new Event('submit'));
    await fixture.whenStable();
  }

  const status = () => element.querySelector('[role="status"]')!.textContent!.trim();
  const button = () => element.querySelector<HTMLButtonElement>('button[type="submit"]')!;

  it('keeps Send disabled until every field is valid', async () => {
    expect(button().disabled).toBe(true);

    fill('contact-name', 'Ada');
    fill('contact-email', 'not-an-email');
    fill('contact-message', 'Hello');
    await fixture.whenStable();
    expect(button().disabled).toBe(true);

    fill('contact-email', 'ada@example.com');
    await fixture.whenStable();
    expect(button().disabled).toBe(false);
  });

  it('shows field errors once a field is left invalid', async () => {
    fill('contact-email', 'not-an-email');
    element.querySelector('#contact-email')!.dispatchEvent(new Event('blur'));
    element.querySelector('#contact-name')!.dispatchEvent(new Event('blur'));
    await fixture.whenStable();

    expect(element.textContent).toContain('Please enter a valid email.');
    expect(element.textContent).toContain('This field is required.');
  });

  it('sends the message, confirms and resets the form', async () => {
    send.mockResolvedValue();
    fillValidForm();
    await submit();

    expect(send).toHaveBeenCalledWith({ name: 'Ada', email: 'ada@example.com', message: 'Hello' });
    expect(status()).toBe('Thanks, your message was sent.');
    expect(element.querySelector<HTMLInputElement>('#contact-name')!.value).toBe('');
  });

  it('blocks double submits while sending', async () => {
    send.mockReturnValue(new Promise(() => {}));
    fillValidForm();
    await submit();

    expect(button().disabled).toBe(true);
    expect(button().textContent!.trim()).toBe('Sending…');
  });

  it('reports a failed send', async () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    send.mockRejectedValue(new Error('network'));
    fillValidForm();
    await submit();

    expect(status()).toBe('Sending failed. Please try again later.');
    expect(consoleError).toHaveBeenCalledWith('Contact form send failed', expect.any(Error));
    expect(button().disabled).toBe(false);
  });
});
