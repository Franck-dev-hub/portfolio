import { Component, inject } from '@angular/core';
import {
  ArrowDown,
  ArrowUp,
  FolderCode,
  Github,
  Layers,
  Linkedin,
  LucideAngularModule,
  LucideIconData,
  Mail,
} from 'lucide-angular';
import { I18n } from '../../core/i18n';
import { Sidebar } from '../../core/sidebar';
import { Translations } from '../../core/translations';

interface MenuLink {
  key: Exclude<keyof Translations['sidebar'], 'label'>;
  href: string;
  icon: LucideIconData;
}

@Component({
  selector: 'app-sidebar',
  imports: [LucideAngularModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  host: { '(document:keydown.escape)': 'sidebar.close()' },
})
export class SidebarMenu {
  protected readonly sidebar = inject(Sidebar);
  protected readonly t = inject(I18n).t;

  protected readonly externalLinks: MenuLink[] = [
    { key: 'linkedin', href: 'https://linkedin.com/in/franck-spadotto', icon: Linkedin },
    { key: 'github', href: 'https://github.com/Franck-dev-hub', icon: Github },
  ];

  protected readonly sectionLinks: MenuLink[] = [
    { key: 'top', href: '#', icon: ArrowUp },
    { key: 'stacks', href: '#stacks', icon: Layers },
    { key: 'projects', href: '#projects', icon: FolderCode },
    { key: 'contact', href: '#contact', icon: Mail },
    { key: 'bottom', href: '#bottom', icon: ArrowDown },
  ];
}
