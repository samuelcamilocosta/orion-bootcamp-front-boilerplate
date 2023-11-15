import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumLogoComponent } from './premium-logo.component';

describe('PremiumLogoComponent', () => {
  let component: PremiumLogoComponent;
  let fixture: ComponentFixture<PremiumLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumLogoComponent]
    });
    fixture = TestBed.createComponent(PremiumLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
