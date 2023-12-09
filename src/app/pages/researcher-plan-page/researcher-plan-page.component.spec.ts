import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherPlanPageComponent } from './researcher-plan-page.component';

describe('ResearcherPlanPageComponent', () => {
  let component: ResearcherPlanPageComponent;
  let fixture: ComponentFixture<ResearcherPlanPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearcherPlanPageComponent]
    });
    fixture = TestBed.createComponent(ResearcherPlanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
