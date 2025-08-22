import { Component } from '@angular/core';
import { QuestionComponent } from '../question/question.component';

@Component({
  standalone: true,
  selector: 'app-first-faq',
  imports: [QuestionComponent],
  templateUrl: './first-faq.component.html',
  styleUrl: './first-faq.component.css',
})
export class FirstFaqComponent {}
