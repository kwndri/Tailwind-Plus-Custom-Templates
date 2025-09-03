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
import { FirstCtaSectionComponent } from './CTA-Sections/first-cta-section-component/first-cta-section-component';
import { SecondCtaSectionComponent } from './CTA-Sections/second-cta-section-component/second-cta-section-component';
import { FirstMenuComponent } from './Flyout-Menus/first-menu-component/first-menu-component';

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
    FirstCtaSectionComponent,
    SecondCtaSectionComponent,
    FirstMenuComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'my-test-components';
}
