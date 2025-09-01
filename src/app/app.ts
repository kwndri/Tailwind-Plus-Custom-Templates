import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FirstFaqComponent } from './FAQs/first-faq/first-faq';
import { SecondFaqComponent } from './FAQs/second-faq/second-faq.component';
import { HeroSectionsComponent } from './Page-Sections/hero-sections/hero-sections';
import { CeoQuoteComponent } from './Pricing-Pages/ceo-quote-component/ceo-quote-component';
import { HeaderComponent } from './Pricing-Pages/header-component/header-component';
import { PricingCardComponent } from './Pricing-Pages/pricing-card-component/pricing-card-component';
import { PricingDescriptionComponent } from './Pricing-Pages/pricing-description-component/pricing-description-component';
import { PricingListComponent } from './Pricing-Pages/pricing-list-component/pricing-list-component';
import { FAQComponent } from './Pricing-Pages/faq-component/faq-component';
import { FooterComponent } from './Pricing-Pages/footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FirstFaqComponent,
    SecondFaqComponent,
    HeroSectionsComponent,
    CeoQuoteComponent,
    HeaderComponent,
    PricingCardComponent,
    PricingDescriptionComponent,
    PricingListComponent,
    FAQComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'my-test-components';
}
