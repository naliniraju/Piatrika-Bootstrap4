import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlotVisitComponent } from './add-plot-visit.component';

describe('AddPlotVisitComponent', () => {
  let component: AddPlotVisitComponent;
  let fixture: ComponentFixture<AddPlotVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlotVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlotVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
