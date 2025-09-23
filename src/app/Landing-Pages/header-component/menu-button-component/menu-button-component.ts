import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-menu-button-component',
  imports: [RouterModule],
  templateUrl: './menu-button-component.html',
  styleUrl: './menu-button-component.css',
})
export class MenuButtonComponent {
  option = input<string>();
}
