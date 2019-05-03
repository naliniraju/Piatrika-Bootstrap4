import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFarmerRelationsComponent } from './add-farmer-relations.component';

describe('AddFarmerRelationsComponent', () => {
  let component: AddFarmerRelationsComponent;
  let fixture: ComponentFixture<AddFarmerRelationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFarmerRelationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFarmerRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
