import { Component, signal } from "@angular/core";
import { Header } from "./components/header/header";
import { Window } from "./components/window/window";

@Component({
  selector: "app-root",
  imports: [Header, Window],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("web-resume");
}
