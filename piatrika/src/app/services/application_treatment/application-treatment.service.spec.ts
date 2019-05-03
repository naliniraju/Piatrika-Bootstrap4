import { TestBed } from '@angular/core/testing';

import { ApplicationTreatmentService } from './application-treatment.service';

describe('ApplicationTreatmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationTreatmentService = TestBed.get(ApplicationTreatmentService);
    expect(service).toBeTruthy();
  });
});
