import { Component, input } from '@angular/core';
import { Question } from '../../../model';
import { IconsComponent } from '../../icons/icons.component';

@Component({
  standalone: true,
  selector: 'app-question',
  imports: [IconsComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  question = input<Question>();

  onExpandText() {
    this.question()!.isExpanded = !this.question()?.isExpanded;
  }
}
