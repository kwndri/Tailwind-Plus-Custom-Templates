import { Component, input, signal } from '@angular/core';
import { IconsComponent } from '../../icons/icons.component';
import { Menu } from '../../../model';
import { DatePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-first-menu-component',
  imports: [IconsComponent, DatePipe],
  templateUrl: './first-menu-component.html',
  styleUrl: './first-menu-component.css',
})
export class FirstMenuComponent {
  menu = input<Menu[]>();
  isExpanded = signal<boolean>(false);

  onExpandMenu() {
    this.isExpanded.set(!this.isExpanded());
    console.log(this.isExpanded);
  }
}
