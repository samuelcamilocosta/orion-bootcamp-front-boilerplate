import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryModalComponent } from './recovery-modal.component';

describe('RecoveryModalComponent', () => {
  let component: RecoveryModalComponent;
  let fixture: ComponentFixture<RecoveryModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecoveryModalComponent]
    });
    fixture = TestBed.createComponent(RecoveryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
