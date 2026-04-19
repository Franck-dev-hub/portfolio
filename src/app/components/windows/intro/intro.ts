import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-intro",
  imports: [CommonModule],
  templateUrl: "./intro.html",
  styleUrl: "./intro.css",
})
export class Intro {
  @Input() title: string = "";
  @Input() heroText: string = "";
  @Input() subtitle: string = "";
  @Input() labels: Record<string, string> = {};
}
