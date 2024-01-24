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
    if (!this.showMessage && this.messageElementRef) {
      this.messageElementRef.nativeElement.remove();
    }
  }

  verifyText() {
    this.showMessage = this.textValue === 'hello world';
  }
}
