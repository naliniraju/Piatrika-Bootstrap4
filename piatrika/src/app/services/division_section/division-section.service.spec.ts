import { TestBed } from '@angular/core/testing';

import { DivisionSectionService } from './division-section.service';

describe('DivisionSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DivisionSectionService = TestBed.get(DivisionSectionService);
    expect(service).toBeTruthy();
  });
});
