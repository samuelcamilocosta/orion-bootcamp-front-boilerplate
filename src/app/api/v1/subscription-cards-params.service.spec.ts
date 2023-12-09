import { TestBed } from '@angular/core/testing';

import { SubscriptionCardsParamsService } from './subscription-cards-params.service';

describe('SubscriptionCardsParamsService', () => {
  let service: SubscriptionCardsParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptionCardsParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
