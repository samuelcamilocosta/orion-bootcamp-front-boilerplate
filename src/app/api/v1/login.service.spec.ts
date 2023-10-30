import { TestBed } from '@angular/core/testing';

import { ApiV1Service } from './login.service';

describe('ApiV1Service', () => {
  let service: ApiV1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiV1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
