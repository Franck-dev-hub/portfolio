import { TestBed } from '@angular/core/testing';
import { Theme } from './theme';

describe('Theme', () => {
  let systemLight: boolean;
  let onSystemChange: (event: { matches: boolean }) => void;

  beforeEach(() => {
    localStorage.clear();
    delete document.documentElement.dataset['theme'];
    systemLight = false;
    vi.spyOn(window, 'matchMedia').mockImplementation(
      (query) =>
        ({
          matches: systemLight,
          media: query,
          addEventListener: (_: string, listener: typeof onSystemChange) =>
            (onSystemChange = listener),
        }) as unknown as MediaQueryList,
    );
  });

  afterEach(() => vi.restoreAllMocks());

  function create(): Theme {
    const theme = TestBed.inject(Theme);
    TestBed.tick();
    return theme;
  }

  it('defaults to dark without a light browser preference', () => {
    expect(create().current()).toBe('dark');
  });

  it('follows a light browser preference', () => {
    systemLight = true;

    expect(create().current()).toBe('light');
  });

  it('tracks browser preference changes until the visitor picks a theme', () => {
    const theme = create();

    onSystemChange({ matches: true });

    expect(theme.current()).toBe('light');
  });

  it('prefers a stored choice over the browser preference', () => {
    systemLight = true;
    localStorage.setItem('theme', 'dark');

    expect(create().current()).toBe('dark');
  });

  it('toggles, applies and remembers the choice', () => {
    const theme = create();

    theme.toggle();
    TestBed.tick();

    expect(theme.isDark()).toBe(false);
    expect(document.documentElement.dataset['theme']).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('does not freeze the detected theme into storage', () => {
    create();

    expect(localStorage.getItem('theme')).toBeNull();
    expect(document.documentElement.dataset['theme']).toBeUndefined();
  });
});
