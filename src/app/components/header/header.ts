import { Component } from "@angular/core";
import { interval, map, Observable } from "rxjs";
import { AsyncPipe, DatePipe } from "@angular/common";

@Component({
  selector: "app-header",
  imports: [AsyncPipe, DatePipe],
  templateUrl: "./header.html",
  styleUrl: "./header.css",
})
export class Header {
  currentTime$: Observable<Date> = interval(1000).pipe(map(() => new Date()));
}
