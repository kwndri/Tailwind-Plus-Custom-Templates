import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-second-section-component',
  imports: [ReactiveFormsModule],
  templateUrl: './second-section-component.html',
  styleUrl: './second-section-component.css',
})
export class SecondSectionComponent {}
