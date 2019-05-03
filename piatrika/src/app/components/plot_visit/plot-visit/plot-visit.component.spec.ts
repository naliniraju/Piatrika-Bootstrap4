import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotVisitComponent } from './plot-visit.component';

describe('PlotVisitComponent', () => {
  let component: PlotVisitComponent;
  let fixture: ComponentFixture<PlotVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
