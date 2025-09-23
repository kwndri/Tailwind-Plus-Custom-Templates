import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-faqs-pricing-component',
  imports: [],
  templateUrl: './faqs-pricing-component.html',
  styleUrl: './faqs-pricing-component.css',
})
export class FaqsPricingComponent {
  questions = signal([
    {
      title: 'Whats the best thing about Switzerland?',
      description:
        'I dont know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      title: 'How do you make holy water?',
      description:
        'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      title: 'Why do you never see elephants hiding in trees?',
      description:
        'Because they are so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      title: 'What do you call someone with no body and no nose?',
      description:
        'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      title: 'Why cantt you hear a pterodactyl go to the bathroom?',
      description:
        'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      title: 'Why did the invisible man turn down the job offer?',
      description:
        'He couldnt see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
  ]);
}
