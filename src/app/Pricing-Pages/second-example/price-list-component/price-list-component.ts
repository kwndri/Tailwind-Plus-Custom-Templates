import { Component, signal } from '@angular/core';
import { PriceSubscription } from '../../../../model';
import { CommonModule } from '@angular/common';
import { PricingCardComponent } from '../pricing-card-component/pricing-card-component';

@Component({
  selector: 'app-price-list-component',
  imports: [CommonModule, PricingCardComponent],
  templateUrl: './price-list-component.html',
  styleUrl: './price-list-component.css',
})
export class PriceListComponent {
  pricing_catalog = signal<PriceSubscription[]>([
    {
      title: 'Freelancer',
      description: 'The essentials to provide your best work for clients.',
      price: { monthly: 29, yearly: 299 },
      characteristics: [
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics',
        '48-hour support response time',
      ],
    },
    {
      title: 'Startup',
      description: 'A plan that scales with your rapidly growing business.',
      price: { monthly: 59, yearly: 599 },
      characteristics: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations',
      ],
    },
    {
      title: 'Enterprise',
      description: 'Dedicated support and infrastructure for your company.',
      price: { monthly: 99, yearly: 999 },
      characteristics: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour support response time',
        'Marketing automations',
      ],
    },
  ]);

  selected: 'monthly' | 'annually' = 'monthly';

  setBilling(option: 'monthly' | 'annually') {
    this.selected = option;
  }
}
