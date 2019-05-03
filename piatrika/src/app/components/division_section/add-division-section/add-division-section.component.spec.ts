import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDivisionSectionComponent } from './add-division-section.component';

describe('AddDivisionSectionComponent', () => {
  let component: AddDivisionSectionComponent;
  let fixture: ComponentFixture<AddDivisionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDivisionSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDivisionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
