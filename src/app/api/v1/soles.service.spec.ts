import { TestBed } from '@angular/core/testing';

import { SolesService } from './soles.service';

describe('SolesService', () => {
  let service: SolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
