import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VecationPlanComponent } from './vecation-plan.component';

describe('VecationPlanComponent', () => {
  let component: VecationPlanComponent;
  let fixture: ComponentFixture<VecationPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VecationPlanComponent]
    });
    fixture = TestBed.createComponent(VecationPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
