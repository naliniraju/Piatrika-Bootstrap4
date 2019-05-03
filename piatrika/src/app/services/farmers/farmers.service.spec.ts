import { TestBed } from '@angular/core/testing';

import { FarmersService } from './farmers.service';

describe('FarmersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmersService = TestBed.get(FarmersService);
    expect(service).toBeTruthy();
  });
});
