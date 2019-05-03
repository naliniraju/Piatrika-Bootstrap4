import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionSectionDetailsComponent } from './division-section-details.component';

describe('DivisionSectionDetailsComponent', () => {
  let component: DivisionSectionDetailsComponent;
  let fixture: ComponentFixture<DivisionSectionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionSectionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionSectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
