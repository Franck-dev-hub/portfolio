import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-stacks",
  imports: [CommonModule],
  templateUrl: "./stacks.html",
  styleUrl: "./stacks.css",
})
export class Stacks {
  @Input() title: string = "";
  @Input() labels: { [key: string]: string } = {};
}
