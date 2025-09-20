import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-companies-component',
  imports: [],
  templateUrl: './companies-component.html',
  styleUrl: './companies-component.css',
})
export class CompaniesComponent {
  company_logos = [
    'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg',
    'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg',
    'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg',
    'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg',
    'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg',
  ];
}
