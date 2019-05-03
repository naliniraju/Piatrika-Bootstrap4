import { TestBed } from '@angular/core/testing';

import { LandVillageService } from './land-village.service';

describe('LandVillageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandVillageService = TestBed.get(LandVillageService);
    expect(service).toBeTruthy();
  });
});
