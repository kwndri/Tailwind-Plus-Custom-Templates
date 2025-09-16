import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-first-section-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './first-section-component.html',
  styleUrl: './first-section-component.css',
})
export class FirstSectionComponent {
  submitted = false;
  showModal = false;

  form = new FormGroup({
    fullName: new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    }),
    email: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl(''),
    message: new FormControl(''),
    budget: new FormControl('', [Validators.required]),
  });

  get fullName() {
    return this.form.get('fullName') as FormGroup;
  }

  get firstName() {
    return this.form.get('fullName.firstName');
  }

  get lastName() {
    return this.form.get('fullName.lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get company() {
    return this.form.get('company');
  }

  get phoneNumber() {
    return this.form.get('phoneNumber');
  }

  get message() {
    return this.form.get('message');
  }

  get budget() {
    return this.form.get('budget');
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('Form submitted:', this.form.value);
    this.showModal = true;
    this.form.reset();
  }
}
