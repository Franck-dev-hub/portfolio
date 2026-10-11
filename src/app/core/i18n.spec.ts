import { TestBed } from '@angular/core/testing';
import { detectLang, I18n } from './i18n';

describe('detectLang', () => {
  it('picks the first supported browser language', () => {
    expect(detectLang(['de-DE', 'fr-FR', 'en'])).toBe('fr');
    expect(detectLang(['EN-us'])).toBe('en');
  });

  it('falls back to English', () => {
    expect(detectLang(['de-DE', 'es'])).toBe('en');
    expect(detectLang([])).toBe('en');
  });
});

describe('I18n', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.restoreAllMocks());

  function create(browserLangs: string[]): I18n {
    vi.spyOn(navigator, 'languages', 'get').mockReturnValue(browserLangs);
    const i18n = TestBed.inject(I18n);
    TestBed.tick();
    return i18n;
  }

  it('follows the browser language by default', () => {
    const i18n = create(['fr-FR']);

    expect(i18n.lang()).toBe('fr');
    expect(document.documentElement.lang).toBe('fr');
    expect(document.title).toBe(i18n.t().meta.title);
  });

  it('prefers a stored choice over the browser language', () => {
    localStorage.setItem('lang', 'en');

    expect(create(['fr-FR']).lang()).toBe('en');
  });

  it('ignores an invalid stored value', () => {
    localStorage.setItem('lang', 'de');

    expect(create(['fr-FR']).lang()).toBe('fr');
  });

  it('switches language and remembers the choice', () => {
    const i18n = create(['en-US']);

    i18n.toggle();
    TestBed.tick();

    expect(i18n.lang()).toBe('fr');
    expect(i18n.t().contact.send).toBe('Envoyer');
    expect(document.documentElement.lang).toBe('fr');
    expect(localStorage.getItem('lang')).toBe('fr');
  });
});
