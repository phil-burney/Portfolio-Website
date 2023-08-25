import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroncoComponent } from './bronco.component';

describe('BroncoComponent', () => {
  let component: BroncoComponent;
  let fixture: ComponentFixture<BroncoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BroncoComponent]
    });
    fixture = TestBed.createComponent(BroncoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
