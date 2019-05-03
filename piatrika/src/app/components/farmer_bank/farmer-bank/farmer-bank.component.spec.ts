import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBankComponent } from './farmer-bank.component';

describe('FarmerBankComponent', () => {
  let component: FarmerBankComponent;
  let fixture: ComponentFixture<FarmerBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
