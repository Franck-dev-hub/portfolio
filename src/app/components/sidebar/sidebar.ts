import { Component } from "@angular/core";
import { SidebarService } from "../../services/sidebar/sidebar";
import { LucideAngularModule, Github, Linkedin, FileUser } from "lucide-angular";

@Component({
  selector: "app-sidebar",
  imports: [LucideAngularModule],
  templateUrl: "./sidebar.html",
  styleUrl: "./sidebar.css",
})
export class SidebarComponent {
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly FileUser = FileUser;
  protected readonly SidebarService = SidebarService;

  constructor(public sidebar: SidebarService) {}
}
