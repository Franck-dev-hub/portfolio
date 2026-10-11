import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let fixture: ComponentFixture<Header>;
  let element: HTMLElement;

  beforeEach(async () => {
    localStorage.setItem('lang', 'en');
    fixture = TestBed.createComponent(Header);
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  afterEach(() => {
    localStorage.clear();
    delete document.documentElement.dataset['theme'];
  });

  async function click(selector: string): Promise<void> {
    element.querySelector<HTMLButtonElement>(selector)!.click();
    await fixture.whenStable();
  }

  it('opens the sidebar and exposes its state', async () => {
    await click('.burger');

    expect(element.querySelector('.burger')!.getAttribute('aria-expanded')).toBe('true');
    expect(element.querySelector('.side-menu')!.classList).toContain('active');
  });

  it('switches language', async () => {
    const langButton = '[aria-label="Passer en français"]';
    await click(langButton);

    expect(document.documentElement.lang).toBe('fr');
    expect(element.querySelector('[aria-label="Switch to English"]')!.textContent!.trim()).toBe(
      'EN',
    );
  });

  it('switches theme', async () => {
    await click('[aria-label="Toggle light and dark theme"]');

    expect(document.documentElement.dataset['theme']).toBe('light');
  });

  it('opens external links in a new tab without leaking the opener', () => {
    const external = element.querySelectorAll<HTMLAnchorElement>('a[href^="http"]');

    expect(external.length).toBeGreaterThan(0);
    external.forEach((link) => {
      expect(link.target).toBe('_blank');
      expect(link.rel).toContain('noopener');
    });
  });
});
