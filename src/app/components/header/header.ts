import { Component } from "@angular/core";
import { interval, map, Observable } from "rxjs";
import { AsyncPipe, DatePipe } from "@angular/common";
import { SidebarService } from "../../services/sidebar/sidebar";
import { SidebarComponent } from "../sidebar/sidebar";
import { ToggleThemeService } from "../../services/toggleTheme/toggle-theme";
import { LucideAngularModule, Moon, Sun } from "lucide-angular";

@Component({
  selector: "app-header",
  imports: [AsyncPipe, DatePipe, SidebarComponent, LucideAngularModule],
  templateUrl: "./header.html",
  styleUrl: "./header.css",
})
export class Header {
  currentTime$: Observable<Date> = interval(1000).pipe(map(() => new Date()));
  protected readonly Moon = Moon;
  protected readonly Sun = Sun;

  constructor(
    public sidebarService: SidebarService,
    public toggleThemeService: ToggleThemeService,
  ) {}
}
