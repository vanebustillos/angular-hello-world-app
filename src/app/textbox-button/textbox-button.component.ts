import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textbox-button',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './textbox-button.component.html',
  styleUrl: './textbox-button.component.css'
})
export class TextboxButtonComponent {
  textValue = '';
  showMessage = false;

  verifyText() {
    this.showMessage = this.textValue === 'hello world';
  }
}
