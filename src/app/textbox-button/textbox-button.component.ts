import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textbox-button',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './textbox-button.component.html',
  styleUrl: './textbox-button.component.css'
})
export class TextboxButtonComponent implements AfterViewInit {
  textValue = '';
  showMessage = false;

  @ViewChild('messageElement') messageElementRef!: ElementRef;

  ngAfterViewInit() {
    // Remove the element if not needed based on showMessage
    if (!this.showMessage && this.messageElementRef) {
      this.messageElementRef.nativeElement.remove();
    }
  }

  verifyText() {
    // Set the showMessage value based on user input
    this.showMessage = this.textValue === 'hello world';
  }
}
