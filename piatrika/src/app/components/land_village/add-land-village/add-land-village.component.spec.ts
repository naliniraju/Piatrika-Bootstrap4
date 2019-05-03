import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLandVillageComponent } from './add-land-village.component';

describe('AddLandVillageComponent', () => {
  let component: AddLandVillageComponent;
  let fixture: ComponentFixture<AddLandVillageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLandVillageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLandVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
