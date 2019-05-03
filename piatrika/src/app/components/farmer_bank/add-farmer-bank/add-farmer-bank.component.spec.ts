import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFarmerBankComponent } from './add-farmer-bank.component';

describe('AddFarmerBankComponent', () => {
  let component: AddFarmerBankComponent;
  let fixture: ComponentFixture<AddFarmerBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFarmerBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFarmerBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
