import { Component } from '@angular/core';
import { IconsComponent } from '../../icons/icons.component';

@Component({
  standalone: true,
  selector: 'app-header-component',
  imports: [IconsComponent],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {}
