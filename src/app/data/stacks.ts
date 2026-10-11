import { Translations } from '../core/translations';

export interface StackCategory {
  id: Exclude<keyof Translations['stacks'], 'title'>;
  items: { label: string; value: string }[];
}

export const STACKS: StackCategory[] = [
  {
    id: 'backend',
    items: [
      { label: 'PHP', value: 'Symfony / Sylius' },
      { label: 'Python', value: 'FastAPI' },
    ],
  },
  {
    id: 'frontend',
    items: [
      { label: 'JS / TS', value: 'Angular / Vue.js / React' },
      { label: 'CSS', value: 'Tailwind / Bootstrap' },
    ],
  },
  {
    id: 'databases',
    items: [
      { label: 'SQL', value: 'MySQL / PostgreSQL / MariaDB' },
      { label: 'ORM', value: 'Doctrine / SQLAlchemy' },
    ],
  },
  {
    id: 'devops',
    items: [
      { label: 'Docker', value: 'Docker Compose' },
      { label: 'Proxy', value: 'Caddy / Nginx' },
    ],
  },
];
