import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptionCardParams } from 'src/app/interfaces/subscription-card-params';
import { SubscriptionCardsParamsService } from '../../api/v1/subscription-cards-params.service';
import { SubscriptionPaymentService } from '../../api/v1/subscription-payment.service';

@Component({
  selector: 'app-researcher-plan-page',
  templateUrl: './researcher-plan-page.component.html',
  styleUrls: ['./researcher-plan-page.component.scss'],
})

/**
 * ResearcherPlanPageComponent
 *
 * represents the subscription page for the researcher plan
 */
export class ResearcherPlanPageComponent implements OnInit {
  subscriptionCardParams?: SubscriptionCardParams;
  subscribeForm: FormGroup;
  expirationDateValue?: string;
  list?: string;

  /**
   * constructor
   *
   * initializes the subscribeForm
   */
  constructor(
    private fb: FormBuilder,
    private subscriptionCardsParamsService: SubscriptionCardsParamsService,
    private subscriptionPaymentService: SubscriptionPaymentService
  ) {
    this.subscribeForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      cardholderName: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3,4}')]],
      checkbox1: ['', [Validators.requiredTrue]],
      checkbox2: ['', [Validators.requiredTrue]],
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  /**
   * loadData
   *
   * method to handle the http request GET from api and add fetched value to subscriptionCardParams
   */
  private async loadData(): Promise<void> {
    this.subscriptionCardParams =
      await this.subscriptionCardsParamsService.getParams();
  }

  /**
   * formatExpirationDate
   *
   *
   * @returns
   */
  formatExpirationDate() {
    const expirationValue = this.subscribeForm.get('expirationDate')?.value;
    if (expirationValue.length === 4) {
      return `${expirationValue[0]}${expirationValue[1]}/${expirationValue[2]}${expirationValue[3]}`;
    } else {
      return (this.expirationDateValue =
        this.subscribeForm.get('expirationDate')?.value);
    }
  }

  updateList() {
    this.list = this.subscribeForm.get('cardNumber')?.value.split('');
  }
  addClass(i: number) {
    if (i <= 11) {
      return (i + 1) % 4 === 0;
    }
    return false;
  }
  async onSubmit() {
    const parte1 = this.subscribeForm
      .get('expirationDate')
      ?.value.substring(0, 2);
    const parte2 = this.subscribeForm.get('expirationDate')?.value.substring(2); // "12"
    const expirationDateFormatted = parte1 + '/' + parte2;
    const cardNumber = this.subscribeForm.get('cardNumber')?.value;

    // Adiciona espaços a cada 4 caracteres
    const cardNumberFormatted = cardNumber.replace(
      /(\d{4})(\d{4})(\d{4})(\d{4})/,
      '$1 $2 $3 $4'
    );

    const dataToSend = {
      planId: 1,
      cardNumber: cardNumberFormatted,
      cardHolderName: this.subscribeForm.get('cardholderName')?.value,
      expirationDate: expirationDateFormatted,
      cvv: this.subscribeForm.get('cvv')?.value,
    };
    console.log(dataToSend);

    this.subscriptionPaymentService.checkout(dataToSend);
  }

  forceDisabled(): boolean {
    return true;
  }
}
