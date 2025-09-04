import { Component, input, signal } from '@angular/core';
import { IconsComponent } from '../../icons/icons.component';
import { SecondMenu } from '../../../model';

@Component({
  standalone: true,
  selector: 'app-second-menu-component',
  imports: [IconsComponent],
  templateUrl: './second-menu-component.html',
  styleUrl: './second-menu-component.css',
})
export class SecondMenuComponent {
  isExpanded = signal<boolean>(false);
  menu = input.required<SecondMenu[]>();
  options = signal(['Watch Demo', 'Contact Sales', 'View all products']);

  onExpandMenu() {
    this.isExpanded.set(!this.isExpanded());
    console.log(this.isExpanded);
  }
}
