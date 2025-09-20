import { Component } from '@angular/core';
import { IconsComponent } from '../../icons/icons.component';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button-component/menu-button-component';

@Component({
  standalone: true,
  selector: 'app-header-component',
  imports: [IconsComponent, CommonModule, MenuButtonComponent],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  isMenuOpen = false;

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
