import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivingCenterComponent } from './diving-center.component';

describe('DivingCenterComponent', () => {
  let component: DivingCenterComponent;
  let fixture: ComponentFixture<DivingCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivingCenterComponent]
    });
    fixture = TestBed.createComponent(DivingCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
