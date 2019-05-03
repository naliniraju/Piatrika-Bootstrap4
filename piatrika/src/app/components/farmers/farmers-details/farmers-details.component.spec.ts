import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersDetailsComponent } from './farmers-details.component';

describe('FarmersDetailsComponent', () => {
  let component: FarmersDetailsComponent;
  let fixture: ComponentFixture<FarmersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
