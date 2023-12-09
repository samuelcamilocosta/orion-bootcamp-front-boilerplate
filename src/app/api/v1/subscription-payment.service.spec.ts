import { TestBed } from '@angular/core/testing';

import { SubscriptionPaymentService } from './subscription-payment.service';

describe('SubscriptionPaymentService', () => {
  let service: SubscriptionPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptionPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
