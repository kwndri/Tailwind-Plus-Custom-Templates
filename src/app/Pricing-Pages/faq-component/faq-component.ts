import { Component } from '@angular/core';
import { QuestionComponent } from '../question-component/question-component';

@Component({
  standalone: true,
  selector: 'app-faq-component',
  imports: [QuestionComponent],
  templateUrl: './faq-component.html',
  styleUrl: './faq-component.css',
})
export class FAQComponent {}
