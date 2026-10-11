import { Translations } from '../core/translations';
import { Badge, badge } from './badge';

export interface Project {
  id: keyof Translations['projects'];
  name: string;
  repository: string;
  website?: string;
  badges: Badge[];
}

const angular = badge('Angular', 'DD0031', 'angular');
const react = badge('React', '20232A', 'react', '61DAFB');
const typescript = badge('TypeScript', '3178C6', 'typescript');

export const PROJECTS: Project[] = [
  {
    id: 'cardVault',
    name: 'Card Vault',
    repository: 'https://github.com/Franck-dev-hub/card-vault',
    website: 'https://card-vault.fr',
    badges: [
      badge('Symfony', '000000', 'symfony'),
      badge('API Platform', '6366F1', 'api-platform'),
      angular,
      badge('Python', '3776AB', 'python'),
      badge('PostgreSQL', '316192', 'postgresql'),
      badge('Redis', 'DC382D', 'redis'),
      badge('Docker', '2496ED', 'docker'),
      badge('Caddy', '1F8AC8', 'caddy'),
    ],
  },
  {
    id: 'homeAssistant',
    name: 'Home Assistant',
    repository: 'https://github.com/Franck-dev-hub/home-assistant',
    badges: [
      badge('Home Assistant', '18BCF2', 'homeassistant'),
      react,
      badge('Ollama', 'FFFFFF', 'ollama', '000000'),
      badge('Mosquitto', '3C2257', 'eclipsemosquitto'),
      badge('Zigbee2MQTT', 'E87E04', 'zigbee2mqtt'),
    ],
  },
  {
    id: 'palimpseste',
    name: 'WikiMasters palimpseste',
    repository: 'https://github.com/Franck-dev-hub/wm-palimpseste',
    badges: [
      typescript,
      badge('Firefox', 'FF7139', 'firefoxbrowser'),
      badge('Chrome', '4285F4', 'googlechrome'),
      badge('Vitest', '6E9F18', 'vitest'),
    ],
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    repository: 'https://github.com/Franck-dev-hub/portfolio',
    badges: [angular, typescript, badge('GitHub Pages', '121013', 'github')],
  },
];
