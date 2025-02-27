import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumModalComponent } from './premium-modal.component';

describe('PremiumModalComponent', () => {
  let component: PremiumModalComponent;
  let fixture: ComponentFixture<PremiumModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumModalComponent]
    });
    fixture = TestBed.createComponent(PremiumModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
