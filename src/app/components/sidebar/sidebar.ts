import { Component } from "@angular/core";
import { SidebarService } from "../../services/sidebar/sidebar";
import {
  LucideAngularModule,
  Github,
  Linkedin,
  FileUser,
  ArrowUp,
  Layers,
  FolderCode,
  Mail,
  ArrowDown,
} from "lucide-angular";

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
  readonly ArrowUp = ArrowUp;
  readonly Layers = Layers;
  readonly FolderCode = FolderCode;
  readonly Mail = Mail;
  readonly ArrowDown = ArrowDown;
  protected readonly SidebarService = SidebarService;

  constructor(public sidebar: SidebarService) {}
}
