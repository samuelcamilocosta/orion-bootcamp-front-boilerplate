import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { premiumGuard } from './premium.guard';

describe('premiumGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => premiumGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
