import { TestBed } from '@angular/core/testing';

import { PlanModalCardsService } from './plan-modal-cards.service';

describe('PlanModalCardsService', () => {
  let service: PlanModalCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanModalCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
