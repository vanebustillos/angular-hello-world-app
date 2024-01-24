import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextboxButtonComponent } from './textbox-button/textbox-button.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextboxButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-hello-world-app';
}
