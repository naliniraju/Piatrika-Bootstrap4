import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandVillageDetailsComponent } from './land-village-details.component';

describe('LandVillageDetailsComponent', () => {
  let component: LandVillageDetailsComponent;
  let fixture: ComponentFixture<LandVillageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandVillageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandVillageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
