import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDialog } from './error-dialog.component';

describe('ErrorDialogComponent', () => {
  let component: ErrorDialog;
  let fixture: ComponentFixture<ErrorDialog>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorDialog],
    });
    fixture = TestBed.createComponent(ErrorDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
