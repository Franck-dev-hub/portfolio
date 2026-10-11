import { computed, DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';
import { readPreference, writePreference } from './preferences';

const THEMES = ['light', 'dark'] as const;
export type ThemeName = (typeof THEMES)[number];

export const THEME_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class Theme {
  private readonly document = inject(DOCUMENT);
  private readonly lightQuery = this.document.defaultView!.matchMedia(
    '(prefers-color-scheme: light)',
  );
  private readonly choice = signal(readPreference(THEME_KEY, THEMES));
  private readonly systemLight = signal(this.lightQuery.matches);

  readonly current = computed<ThemeName>(
    () => this.choice() ?? (this.systemLight() ? 'light' : 'dark'),
  );
  readonly isDark = computed(() => this.current() === 'dark');

  constructor() {
    this.lightQuery.addEventListener('change', (event) => this.systemLight.set(event.matches));

    effect(() => {
      const choice = this.choice();
      if (choice) {
        this.document.documentElement.dataset['theme'] = choice;
      }
    });
  }

  toggle(): void {
    const next: ThemeName = this.isDark() ? 'light' : 'dark';
    this.choice.set(next);
    writePreference(THEME_KEY, next);
  }
}
