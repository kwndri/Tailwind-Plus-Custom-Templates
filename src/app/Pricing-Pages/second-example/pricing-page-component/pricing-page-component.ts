import { Component } from '@angular/core';
import { DescriptionPriceComponent } from '../description-price-component/description-price-component';
import { PriceListComponent } from '../price-list-component/price-list-component';
import { FaqsPricingComponent } from '../faqs-pricing-component/faqs-pricing-component';
import { CompaniesQuoteComponent } from '../companies-quote-component/companies-quote-component';

@Component({
  standalone: true,
  selector: 'app-pricing-page-component',
  imports: [
    DescriptionPriceComponent,
    PriceListComponent,
    FaqsPricingComponent,
    CompaniesQuoteComponent,
  ],
  templateUrl: './pricing-page-component.html',
  styleUrl: './pricing-page-component.css',
})
export class PricingPageComponent {}
