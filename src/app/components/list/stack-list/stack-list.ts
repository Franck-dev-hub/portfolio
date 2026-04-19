import { Component } from "@angular/core";
import { Stacks } from "../../windows/stacks/stacks";

@Component({
  selector: "app-stack-list",
  imports: [Stacks],
  templateUrl: "./stack-list.html",
  styleUrl: "../../../app.css",
})
export class StackList {}
