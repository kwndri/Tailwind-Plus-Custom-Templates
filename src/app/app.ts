import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footers/footer/footer.component';
import { FirstFaqComponent } from './FAQs/first-faq/first-faq';
import { SecondFaqComponent } from './FAQs/second-faq/second-faq.component';
import { HeroSectionsComponent } from './Page-Sections/hero-sections/hero-sections';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    FirstFaqComponent,
    SecondFaqComponent,
    HeroSectionsComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'my-test-components';
}
