import { TestBed } from '@angular/core/testing';

import { FarmerBankService } from './farmer-bank.service';

describe('FarmerBankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmerBankService = TestBed.get(FarmerBankService);
    expect(service).toBeTruthy();
  });
});
