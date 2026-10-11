import { Component, inject } from '@angular/core';
import { I18n } from '../../core/i18n';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly t = inject(I18n).t;
  protected readonly year = new Date().getFullYear();
}
