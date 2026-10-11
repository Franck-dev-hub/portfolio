import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { PROJECTS } from './data/projects';

describe('App', () => {
  afterEach(() => vi.restoreAllMocks());

  async function render(browserLangs: string[]): Promise<HTMLElement> {
    localStorage.clear();
    vi.spyOn(navigator, 'languages', 'get').mockReturnValue(browserLangs);
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return fixture.nativeElement;
  }

  it('renders every section with its anchor', async () => {
    const element = await render(['en']);

    expect(element.querySelector('h1')!.textContent).toContain('Franck S.');
    for (const id of ['stacks', 'projects', 'contact', 'bottom']) {
      expect(element.querySelector(`#${id}`)).not.toBeNull();
    }
    expect(element.querySelectorAll('#projects app-window').length).toBe(PROJECTS.length);
  });

  it('renders in the browser language', async () => {
    const element = await render(['fr-FR']);

    expect(element.querySelector('#projects h2')!.textContent).toBe('Projets');
  });
});
