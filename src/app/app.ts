import { Component, signal } from "@angular/core";
import { Header } from "./components/header/header";
import { IntroList } from "./components/list/intro-list/intro-list";
import { StackList } from "./components/list/stack-list/stack-list";
import { ProjectsList } from "./components/list/projects-list/projects-list";
import { Footer } from "./components/footer/footer";
import { ContactForm } from "./components/windows/contact-form/contact-form";

@Component({
  selector: "app-root",
  imports: [Header, IntroList, StackList, ProjectsList, Footer, ContactForm],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("portfolio");
}
