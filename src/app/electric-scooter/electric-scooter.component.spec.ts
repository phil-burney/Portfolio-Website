import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricScooterComponent } from './electric-scooter.component';

describe('ElectricScooterComponent', () => {
  let component: ElectricScooterComponent;
  let fixture: ComponentFixture<ElectricScooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricScooterComponent]
    });
    fixture = TestBed.createComponent(ElectricScooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
