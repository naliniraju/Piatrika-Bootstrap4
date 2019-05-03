import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationTreatmentDetailsComponent } from './application-treatment-details.component';

describe('ApplicationTreatmentDetailsComponent', () => {
  let component: ApplicationTreatmentDetailsComponent;
  let fixture: ComponentFixture<ApplicationTreatmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationTreatmentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationTreatmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
