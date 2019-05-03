import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionSectionComponent } from './division-section.component';

describe('DivisionSectionComponent', () => {
  let component: DivisionSectionComponent;
  let fixture: ComponentFixture<DivisionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
