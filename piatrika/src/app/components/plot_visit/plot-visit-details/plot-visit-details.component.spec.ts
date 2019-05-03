import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotVisitDetailsComponent } from './plot-visit-details.component';

describe('PlotVisitDetailsComponent', () => {
  let component: PlotVisitDetailsComponent;
  let fixture: ComponentFixture<PlotVisitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotVisitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotVisitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
