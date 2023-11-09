import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteorologyCarouselCardComponent } from './meteorology-carousel-card.component';

describe('MeteorologyCarouselCardComponent', () => {
  let component: MeteorologyCarouselCardComponent;
  let fixture: ComponentFixture<MeteorologyCarouselCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeteorologyCarouselCardComponent]
    });
    fixture = TestBed.createComponent(MeteorologyCarouselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
