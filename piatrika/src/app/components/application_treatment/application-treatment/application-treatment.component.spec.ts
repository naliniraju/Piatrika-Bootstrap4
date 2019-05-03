import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationTreatmentComponent } from './application-treatment.component';

describe('ApplicationTreatmentComponent', () => {
  let component: ApplicationTreatmentComponent;
  let fixture: ComponentFixture<ApplicationTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
