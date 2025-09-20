import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-menu-button-component',
  imports: [],
  templateUrl: './menu-button-component.html',
  styleUrl: './menu-button-component.css',
})
export class MenuButtonComponent {
  option = input<string>();
}
