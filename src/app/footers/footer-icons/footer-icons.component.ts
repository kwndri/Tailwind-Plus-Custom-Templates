import { Component } from '@angular/core';
import { IconsComponent } from '../../icons/icons.component';

@Component({
  standalone: true,
  selector: 'app-footer-icons',
  imports: [IconsComponent],
  templateUrl: './footer-icons.component.html',
  styleUrl: './footer-icons.component.css',
})
export class FooterIconsComponent {}
