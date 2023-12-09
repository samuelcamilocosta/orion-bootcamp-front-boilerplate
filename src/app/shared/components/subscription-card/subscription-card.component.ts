import { Component, Input } from '@angular/core';
import { SubscriptionCardParams } from 'src/app/interfaces/subscription-card-params';

@Component({
  selector: 'app-subscription-card',
  templateUrl: './subscription-card.component.html',
  styleUrls: ['./subscription-card.component.scss'],
})
export class SubscriptionCardComponent {
  @Input() subscriptionCardParams?: SubscriptionCardParams;

  subscriptionType() {
    if (this.subscriptionCardParams?.type === 'monthly') {
      return 'ASSINATURA MENSAL';
    }
    return 'monthly';
  }

  showDiscount() {
    return this.subscriptionCardParams?.saves_percentage === null
      ? 'hidden'
      : 'visible';
  }
}
