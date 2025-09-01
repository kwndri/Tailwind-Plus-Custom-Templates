import { Component, input } from '@angular/core';
import { IconsComponent } from '../../icons/icons.component';
import { PriceSubscription } from '../../../model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-pricing-card-component',
  imports: [IconsComponent, CommonModule],
  templateUrl: './pricing-card-component.html',
  styleUrl: './pricing-card-component.css',
})
export class PricingCardComponent {
  price_option = input<PriceSubscription>();
  payment_option = input();
}
