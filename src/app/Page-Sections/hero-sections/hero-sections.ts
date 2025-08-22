import { Component } from '@angular/core';
import { IconsComponent } from '../../icons/icons.component';

@Component({
  standalone: true,
  selector: 'app-hero-sections',
  imports: [IconsComponent],
  templateUrl: './hero-sections.component.html',
  styleUrl: './hero-sections.component.css',
})
export class HeroSectionsComponent {}
