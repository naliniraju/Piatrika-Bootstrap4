import { TestBed } from '@angular/core/testing';

import { FarmerRelationsService } from './farmer-relations.service';

describe('FarmerRelationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmerRelationsService = TestBed.get(FarmerRelationsService);
    expect(service).toBeTruthy();
  });
});
