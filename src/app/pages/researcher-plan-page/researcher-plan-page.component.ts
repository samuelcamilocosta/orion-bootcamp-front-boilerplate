import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
export class ResearcherPlanPageComponent {
  subscribeForm: FormGroup;
  teste?: string;
  /**
   * constructor
   *
   * initializes the subscribeForm
   */
  constructor(private fb: FormBuilder) {
    this.subscribeForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      cardholderName: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      ccv: ['', [Validators.required, Validators.pattern('[0-9]{3,4}')]],
      checkbox1: ['', [Validators.requiredTrue]],
      checkbox2: ['', [Validators.requiredTrue]],
    });
  }

  test() {
    const expirationValue = this.subscribeForm.get('expirationDate')?.value;
    if (expirationValue.length === 4) {
      return `${expirationValue[0]}${expirationValue[1]}/${expirationValue[2]}${expirationValue[3]}`;
    } else {
      return (this.teste = this.subscribeForm.get('expirationDate')?.value);
    }
  }
  onSubmit() {
    const subscribeForm = this.subscribeForm.value;
    console.log(subscribeForm);
  }

  forceDisabled(): boolean {
    return true;
  }
}
