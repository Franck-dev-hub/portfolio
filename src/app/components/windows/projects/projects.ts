import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-projects",
  imports: [CommonModule],
  templateUrl: "./projects.html",
  styleUrl: "./projects.css",
})
export class Projects {
  @Input() title: string = "";
  @Input() heroText: string = "";
  @Input() description: string = "";
  @Input() stacks: string = "";
  @Input() link: string = "";
  @Input() goal: string = "";
}
