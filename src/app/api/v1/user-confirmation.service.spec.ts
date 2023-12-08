import { TestBed } from '@angular/core/testing';

import { UserConfirmationService } from './user-confirmation.service';

describe('UserConfirmationService', () => {
  let service: UserConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserConfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
