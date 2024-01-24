import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxButtonComponent } from './textbox-button.component';

describe('TextboxButtonComponent', () => {
  let component: TextboxButtonComponent;
  let fixture: ComponentFixture<TextboxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextboxButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextboxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
