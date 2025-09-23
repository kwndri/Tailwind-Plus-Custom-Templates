import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FirstFaqComponent } from './FAQs/first-faq/first-faq';
import { SecondFaqComponent } from './FAQs/second-faq/second-faq.component';
import { HeroSectionsComponent } from './Page-Sections/hero-sections/hero-sections';
import { CeoQuoteComponent } from './Pricing-Pages/ceo-quote-component/ceo-quote-component';
import { PricingCardComponent } from './Pricing-Pages/pricing-card-component/pricing-card-component';
import { PricingDescriptionComponent } from './Pricing-Pages/pricing-description-component/pricing-description-component';
import { PricingListComponent } from './Pricing-Pages/pricing-list-component/pricing-list-component';
import { FAQComponent } from './Pricing-Pages/faq-component/faq-component';
import { FirstCtaSectionComponent } from './CTA-Sections/first-cta-section-component/first-cta-section-component';
import { SecondCtaSectionComponent } from './CTA-Sections/second-cta-section-component/second-cta-section-component';
import { FirstMenuComponent } from './Flyout-Menus/first-menu-component/first-menu-component';
import { SecondMenuComponent } from './Flyout-Menus/second-menu-component/second-menu-component';
import { ThirdMenuComponent } from './Flyout-Menus/third-menu-component/third-menu-component';
import { NotFoundComponent } from './404-Pages/not-found-component/not-found-component';
import { FirstSectionComponent } from './Contact-Sections/first-section-component/first-section-component';
import { SecondSectionComponent } from './Contact-Sections/second-section-component/second-section-component';
import { OurTeamComponent } from './Team-Sections/our-team-component/our-team-component';
import { LandingPageComponent } from './Landing-Pages/landing-page-component/landing-page-component';
import { HeaderComponent } from './Landing-Pages/header-component/header-component';
import { FooterComponent } from './Landing-Pages/footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FirstFaqComponent,
    SecondFaqComponent,
    HeroSectionsComponent,
    CeoQuoteComponent,
    PricingCardComponent,
    PricingDescriptionComponent,
    PricingListComponent,
    FAQComponent,
    FirstCtaSectionComponent,
    SecondCtaSectionComponent,
    FirstMenuComponent,
    SecondMenuComponent,
    ThirdMenuComponent,
    NotFoundComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    OurTeamComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'my-test-components';
}
