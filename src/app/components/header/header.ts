import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { map, timer } from 'rxjs';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';
import { I18n } from '../../core/i18n';
import { Sidebar } from '../../core/sidebar';
import { Theme } from '../../core/theme';
import { SidebarMenu } from '../sidebar/sidebar';

@Component({
  selector: 'app-header',
  imports: [DatePipe, LucideAngularModule, SidebarMenu],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly i18n = inject(I18n);
  protected readonly theme = inject(Theme);
  protected readonly sidebar = inject(Sidebar);
  protected readonly t = this.i18n.t;
  protected readonly now = toSignal(timer(0, 1000).pipe(map(() => new Date())), {
    initialValue: new Date(),
  });
  protected readonly Moon = Moon;
  protected readonly Sun = Sun;
}
