import { TestBed } from '@angular/core/testing';

import { HomePageCardsService } from './home-page-cards.service';

describe('HomePageCardsService', () => {
  let service: HomePageCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePageCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
