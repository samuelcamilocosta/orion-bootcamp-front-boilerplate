import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRecoveryDialogComponent } from './password-recovery-dialog.component';

describe('PasswordRecoveryDialogComponent', () => {
  let component: PasswordRecoveryDialogComponent;
  let fixture: ComponentFixture<PasswordRecoveryDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordRecoveryDialogComponent]
    });
    fixture = TestBed.createComponent(PasswordRecoveryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
