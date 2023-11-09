import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteorologyHeroCardComponent } from './meteorology-hero-card.component';

describe('MeteorologyHeroCardComponent', () => {
  let component: MeteorologyHeroCardComponent;
  let fixture: ComponentFixture<MeteorologyHeroCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeteorologyHeroCardComponent]
    });
    fixture = TestBed.createComponent(MeteorologyHeroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
