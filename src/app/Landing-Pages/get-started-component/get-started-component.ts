import { Component } from '@angular/core';
import { IconsComponent } from '../../icons/icons.component';
import { LearnMoreComponent } from '../learn-more-component/learn-more-component';

@Component({
  standalone: true,
  selector: 'app-get-started-component',
  imports: [IconsComponent, LearnMoreComponent],
  templateUrl: './get-started-component.html',
  styleUrl: './get-started-component.css',
})
export class GetStartedComponent {}
