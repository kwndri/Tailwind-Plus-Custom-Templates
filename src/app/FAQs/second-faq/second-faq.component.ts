import { Component, signal } from '@angular/core';
import { SecondFAQQuestion } from '../../../model';

@Component({
  standalone: true,
  selector: 'app-second-faq',
  imports: [],
  templateUrl: './second-faq.component.html',
  styleUrl: './second-faq.component.css',
})
export class SecondFaqComponent {
  questions = signal<SecondFAQQuestion[]>([
    {
      title: 'What is the best thing about Switzerland?',
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      title: 'How do you make holy water?',
      answer:
        'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      title: 'What do you call someone with no body and no nose',
      answer:
        "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      title: 'Why do you never see elephants hiding in trees?',
      answer:
        'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      title: 'Why cant you hear a pterodactyl go to the bathroom',
      answer:
        'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      title: 'Why did the invisible man turn down the job offer',
      answer:
        "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ]);
}
