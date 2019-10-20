import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPartialComponent } from './patient-partial.component';

describe('PatientPartialComponent', () => {
  let component: PatientPartialComponent;
  let fixture: ComponentFixture<PatientPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
