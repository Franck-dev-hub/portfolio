import { Component, signal } from "@angular/core";
import { Header } from "./components/header/header";
import { Description } from "./components/description/description";

@Component({
  selector: "app-root",
  imports: [Header, Description],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("portfolio");
}
