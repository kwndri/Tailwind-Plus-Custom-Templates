import { Component } from '@angular/core';
import { IconsComponent } from '../../icons/icons.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-header-component',
  imports: [IconsComponent, CommonModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  isMenuOpen = false;
}
