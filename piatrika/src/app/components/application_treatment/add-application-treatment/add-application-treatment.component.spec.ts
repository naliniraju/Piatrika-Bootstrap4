import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApplicationTreatmentComponent } from './add-application-treatment.component';

describe('AddApplicationTreatmentComponent', () => {
  let component: AddApplicationTreatmentComponent;
  let fixture: ComponentFixture<AddApplicationTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddApplicationTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApplicationTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
