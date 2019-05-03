import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarietyDetailsComponent } from './variety-details.component';

describe('VarietyDetailsComponent', () => {
  let component: VarietyDetailsComponent;
  let fixture: ComponentFixture<VarietyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarietyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarietyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
