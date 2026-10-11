import { Component, inject } from '@angular/core';
import { I18n } from '../../core/i18n';
import { STACKS } from '../../data/stacks';
import { WindowFrame } from '../window/window';

@Component({
  selector: 'app-stacks',
  imports: [WindowFrame],
  templateUrl: './stacks.html',
  styleUrl: './stacks.css',
})
export class Stacks {
  protected readonly t = inject(I18n).t;
  protected readonly stacks = STACKS;
}
