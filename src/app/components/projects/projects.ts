import { Component, inject } from '@angular/core';
import { I18n } from '../../core/i18n';
import { PROJECTS } from '../../data/projects';
import { WindowFrame } from '../window/window';

@Component({
  selector: 'app-projects',
  imports: [WindowFrame],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly t = inject(I18n).t;
  protected readonly projects = PROJECTS;
}
