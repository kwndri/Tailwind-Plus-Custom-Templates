import { Component, signal } from '@angular/core';
import { IconsComponent } from '../../icons/icons.component';
import { SecondMenu } from '../../../model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-third-menu-component',
  imports: [IconsComponent, DatePipe, CommonModule],
  templateUrl: './third-menu-component.html',
  styleUrl: './third-menu-component.css',
})
export class ThirdMenuComponent {
  isExpanded = signal<boolean>(false);
  options = signal(['Watch Demo', 'Contact Sales', 'View all products']);
  menu = signal<SecondMenu[]>([
    { title: 'Help Center', description: 'Get all of your questions answered' },
    { title: 'Guides', description: 'Learn how to maximize our platform' },
    { title: 'Events', description: 'See meet-ups and other events near you' },
  ]);

  posts = signal([
    { date: '2023-03-5', content: 'Boost your conversion rate' },
    {
      date: '2023-02-25',
      content:
        'How to use search engine optimization to drive traffic to your site',
    },
    { date: '2023-02-21', content: 'Improve your customer experience' },
  ]);

  onExpandMenu() {
    this.isExpanded.set(!this.isExpanded());
    console.log(this.isExpanded);
  }
}
