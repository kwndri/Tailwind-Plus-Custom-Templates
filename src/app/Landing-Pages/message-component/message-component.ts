import { Component } from '@angular/core';
import { IconsComponent } from '../../icons/icons.component';
import { LearnMoreComponent } from '../learn-more-component/learn-more-component';

@Component({
  standalone: true,
  selector: 'app-message-component',
  imports: [IconsComponent, LearnMoreComponent],
  templateUrl: './message-component.html',
  styleUrl: './message-component.css',
})
export class MessageComponent {}
