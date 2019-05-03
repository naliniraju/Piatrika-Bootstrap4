import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandVillageComponent } from './land-village.component';

describe('LandVillageComponent', () => {
  let component: LandVillageComponent;
  let fixture: ComponentFixture<LandVillageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandVillageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
