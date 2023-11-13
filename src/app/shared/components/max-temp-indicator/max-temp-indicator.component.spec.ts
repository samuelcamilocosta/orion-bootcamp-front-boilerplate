import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxTempIndicatorComponent } from './max-temp-indicator.component';

describe('MaxTempIndicatorComponent', () => {
  let component: MaxTempIndicatorComponent;
  let fixture: ComponentFixture<MaxTempIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaxTempIndicatorComponent]
    });
    fixture = TestBed.createComponent(MaxTempIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
