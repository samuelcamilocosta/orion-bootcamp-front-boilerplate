import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteorologyPageComponent } from './meteorology-page.component';

describe('MeteorologyPageComponent', () => {
  let component: MeteorologyPageComponent;
  let fixture: ComponentFixture<MeteorologyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeteorologyPageComponent]
    });
    fixture = TestBed.createComponent(MeteorologyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
