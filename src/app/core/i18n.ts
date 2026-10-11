import { computed, DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { readPreference, writePreference } from './preferences';
import { TRANSLATIONS } from './translations';

const LANGS = ['en', 'fr'] as const;
export type Lang = (typeof LANGS)[number];

const LANG_KEY = 'lang';

export function detectLang(browserLangs: readonly string[]): Lang {
  for (const tag of browserLangs) {
    const lang = LANGS.find((item) => tag.toLowerCase().startsWith(item));
    if (lang) {
      return lang;
    }
  }
  return 'en';
}

@Injectable({ providedIn: 'root' })
export class I18n {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly lang = signal<Lang>(
    readPreference(LANG_KEY, LANGS) ??
      detectLang(this.document.defaultView?.navigator.languages ?? []),
  );
  readonly t = computed(() => TRANSLATIONS[this.lang()]);

  constructor() {
    effect(() => {
      const t = this.t();
      this.document.documentElement.lang = this.lang();
      this.title.setTitle(t.meta.title);
      this.meta.updateTag({ name: 'description', content: t.meta.description });
    });
  }

  toggle(): void {
    const next: Lang = this.lang() === 'en' ? 'fr' : 'en';
    this.lang.set(next);
    writePreference(LANG_KEY, next);
  }
}
