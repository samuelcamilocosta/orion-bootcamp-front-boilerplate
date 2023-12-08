import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementModalComponent } from './agreement-modal.component';

describe('AgreementModalComponent', () => {
  let component: AgreementModalComponent;
  let fixture: ComponentFixture<AgreementModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgreementModalComponent]
    });
    fixture = TestBed.createComponent(AgreementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
