import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRelationsDetailsComponent } from './farmer-relations-details.component';

describe('FarmerRelationsDetailsComponent', () => {
  let component: FarmerRelationsDetailsComponent;
  let fixture: ComponentFixture<FarmerRelationsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerRelationsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRelationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
