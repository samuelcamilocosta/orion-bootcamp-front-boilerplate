import { TestBed } from '@angular/core/testing';

import { TransitionQuotesService } from './transition-quotes.service';

describe('TransitionQuotesService', () => {
  let service: TransitionQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransitionQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
