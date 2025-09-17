import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-second-section-component',
  imports: [ReactiveFormsModule],
  templateUrl: './second-section-component.html',
  styleUrl: './second-section-component.css',
})
export class SecondSectionComponent {
  contactForm = new FormGroup({
    fullName: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    }),
    budget: new FormControl(''),
    website: new FormControl(''),
    message: new FormControl(''),
  });

  get firstName() {
    return this.contactForm.get('fullName.firstName');
  }
  get lastName() {
    return this.contactForm.get('fullName.lastName');
  }
  get budget() {
    return this.contactForm.get('budget');
  }
  get website() {
    return this.contactForm.get('website');
  }
  get message() {
    return this.contactForm.get('message');
  }
}
