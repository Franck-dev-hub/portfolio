import { Component, signal } from "@angular/core";
import { Header } from "./components/header/header";
import { Intro } from "./components/windows/intro/intro";
import { Projects } from "./components/windows/projects/projects";
import { Stacks } from "./components/windows/stacks/stacks";

@Component({
  selector: "app-root",
  imports: [Header, Intro, Projects, Stacks],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("portfolio");
}
