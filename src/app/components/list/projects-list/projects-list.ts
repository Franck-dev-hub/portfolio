import { Component } from "@angular/core";
import { Projects } from "../../windows/projects/projects";

@Component({
  selector: "app-projects-list",
  imports: [Projects],
  templateUrl: "./projects-list.html",
  styleUrl: "../../../app.css",
})
export class ProjectsList {}
