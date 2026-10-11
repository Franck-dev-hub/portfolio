import { Component } from '@angular/core';
import { ContactForm } from './components/contact-form/contact-form';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Intro } from './components/intro/intro';
import { Projects } from './components/projects/projects';
import { Stacks } from './components/stacks/stacks';

@Component({
  selector: 'app-root',
  imports: [Header, Intro, Stacks, Projects, ContactForm, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
