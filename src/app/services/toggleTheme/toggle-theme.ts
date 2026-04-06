import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ToggleThemeService {
  public isDark: boolean = true;
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  toggleTheme() {
    this.isDark = !this.isDark;

    if (!this.isDark) {
      this.renderer.addClass(document.body, "light-theme");
    } else {
      this.renderer.removeClass(document.body, "light-theme");
    }
  }
}
