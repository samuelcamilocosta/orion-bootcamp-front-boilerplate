import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinTempIndicatorComponent } from './min-temp-indicator.component';

describe('MinTempIndicatorComponent', () => {
  let component: MinTempIndicatorComponent;
  let fixture: ComponentFixture<MinTempIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinTempIndicatorComponent]
    });
    fixture = TestBed.createComponent(MinTempIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
