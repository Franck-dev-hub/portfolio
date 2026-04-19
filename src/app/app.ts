import { Component, signal } from "@angular/core";
import { Header } from "./components/header/header";
import { Intro } from "./components/windows/intro/intro";
import { Projects } from "./components/windows/projects/projects";
import { Stacks } from "./components/windows/stacks/stacks";
import { IntroList } from "./components/list/intro-list/intro-list";
import { StackList } from "./components/list/stack-list/stack-list";
import { ProjectsList } from "./components/list/projects-list/projects-list";
import { Footer } from "./components/footer/footer";

@Component({
  selector: "app-root",
  imports: [Header, Intro, Projects, Stacks, IntroList, StackList, ProjectsList, Footer],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("portfolio");
}
