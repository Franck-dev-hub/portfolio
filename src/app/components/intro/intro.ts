import { Component, inject } from '@angular/core';
import { I18n } from '../../core/i18n';
import { WindowFrame } from '../window/window';

@Component({
  selector: 'app-intro',
  imports: [WindowFrame],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro {
  protected readonly t = inject(I18n).t;
}
