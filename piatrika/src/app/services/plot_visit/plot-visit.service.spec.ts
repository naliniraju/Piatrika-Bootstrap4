import { TestBed } from '@angular/core/testing';

import { PlotVisitService } from './plot-visit.service';

describe('PlotVisitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlotVisitService = TestBed.get(PlotVisitService);
    expect(service).toBeTruthy();
  });
});
