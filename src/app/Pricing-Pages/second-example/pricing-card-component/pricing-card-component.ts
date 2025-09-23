import { Component, input } from '@angular/core';
import { PriceSubscription } from '../../../../model';
import { IconsComponent } from '../../../icons/icons.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing-card-component',
  imports: [IconsComponent, CommonModule],
  templateUrl: './pricing-card-component.html',
  styleUrl: './pricing-card-component.css',
})
export class PricingCardComponent {
  price_option = input<PriceSubscription>();
  payment_option = input();
}
