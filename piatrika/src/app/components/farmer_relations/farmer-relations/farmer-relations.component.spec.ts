import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRelationsComponent } from './farmer-relations.component';

describe('FarmerRelationsComponent', () => {
  let component: FarmerRelationsComponent;
  let fixture: ComponentFixture<FarmerRelationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerRelationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
