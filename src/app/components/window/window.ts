import { Component, input } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.html',
  styleUrl: './window.css',
})
export class WindowFrame {
  readonly title = input.required<string>();
}
