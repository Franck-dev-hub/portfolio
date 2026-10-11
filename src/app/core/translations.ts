const en = {
  meta: {
    title: 'Franck S. · PHP / Symfony developer',
    description: 'Portfolio of Franck S., PHP / Symfony / Sylius developer.',
  },
  header: {
    menu: 'Menu',
    toggleTheme: 'Toggle light and dark theme',
    switchLanguage: 'Passer en français',
  },
  sidebar: {
    label: 'Navigation',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    top: 'Top',
    stacks: 'Stacks',
    projects: 'Projects',
    contact: 'Contact',
    bottom: 'Bottom',
  },
  intro: {
    window: 'Hello there!',
    hero: "I'm Franck S.",
    role: 'PHP / Symfony / Sylius developer',
    subtitle: 'Welcome to my portfolio',
  },
  stacks: {
    title: 'Stacks',
    backend: 'Backend',
    frontend: 'Frontend',
    databases: 'Databases',
    devops: 'DevOps',
  },
  projectList: {
    title: 'Projects',
    stack: 'Stack',
    goal: 'Goal',
    code: 'Code',
    website: 'Website',
  },
  projects: {
    cardVault: {
      description: 'Every trading card in one vault, whatever the game',
      goal: 'Search for a card or scan it with the camera to add it to the vault',
    },
    palimpseste: {
      description: 'Browser extension that rewrites WikiMasters on top of itself',
      goal: 'More info on cards, pulls and the market, without automating the game',
    },
    homeAssistant: {
      description: 'Personal home automation running in Docker',
      goal: 'Share my self-hosted home automation setup',
    },
    portfolio: {
      description: 'This portfolio',
      goal: 'A quick overview of my skills and main stacks',
    },
  },
  contact: {
    title: 'Contact',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    sending: 'Sending…',
    sent: 'Thanks, your message was sent.',
    error: 'Sending failed. Please try again later.',
    required: 'This field is required.',
    invalidEmail: 'Please enter a valid email.',
  },
  footer: {
    rights: 'All rights reserved',
    tagline: 'No cookies, no tracking, just code',
  },
};

export type Translations = typeof en;

const fr: Translations = {
  meta: {
    title: 'Franck S. · Développeur PHP / Symfony',
    description: 'Portfolio de Franck S., développeur PHP / Symfony / Sylius.',
  },
  header: {
    menu: 'Menu',
    toggleTheme: 'Basculer entre thème clair et sombre',
    switchLanguage: 'Switch to English',
  },
  sidebar: {
    label: 'Navigation',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    top: 'Haut',
    stacks: 'Stacks',
    projects: 'Projets',
    contact: 'Contact',
    bottom: 'Bas',
  },
  intro: {
    window: 'Bonjour !',
    hero: 'Je suis Franck S.',
    role: 'Développeur PHP / Symfony / Sylius',
    subtitle: 'Bienvenue sur mon portfolio',
  },
  stacks: {
    title: 'Stacks',
    backend: 'Backend',
    frontend: 'Frontend',
    databases: 'Bases de données',
    devops: 'DevOps',
  },
  projectList: {
    title: 'Projets',
    stack: 'Stack',
    goal: 'Objectif',
    code: 'Code',
    website: 'Site',
  },
  projects: {
    cardVault: {
      description: 'Toutes vos cartes à collectionner dans un seul coffre, quel que soit le jeu',
      goal: "Rechercher une carte ou la scanner avec la caméra pour l'ajouter au coffre",
    },
    palimpseste: {
      description: 'Extension navigateur qui réécrit WikiMasters par-dessus, comme un palimpseste',
      goal: "Plus d'infos sur les cartes, les tirages et le marché, sans automatiser le jeu",
    },
    homeAssistant: {
      description: 'Domotique personnelle sous Docker',
      goal: 'Partager mon installation domotique auto-hébergée',
    },
    portfolio: {
      description: 'Ce portfolio',
      goal: 'Un aperçu rapide de mes compétences et de mes stacks',
    },
  },
  contact: {
    title: 'Contact',
    name: 'Nom',
    email: 'Email',
    message: 'Message',
    send: 'Envoyer',
    sending: 'Envoi…',
    sent: 'Merci, votre message a bien été envoyé.',
    error: "L'envoi a échoué. Réessayez plus tard.",
    required: 'Ce champ est obligatoire.',
    invalidEmail: 'Saisissez un email valide.',
  },
  footer: {
    rights: 'Tous droits réservés',
    tagline: 'Pas de cookies, pas de tracking, juste du code',
  },
};

export const TRANSLATIONS = { en, fr } as const;
