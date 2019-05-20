import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersMapComponent } from './farmers-map.component';

describe('FarmersMapComponent', () => {
  let component: FarmersMapComponent;
  let fixture: ComponentFixture<FarmersMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmersMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmersMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
