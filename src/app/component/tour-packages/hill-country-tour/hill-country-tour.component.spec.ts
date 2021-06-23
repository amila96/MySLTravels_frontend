import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HillCountryTourComponent } from './hill-country-tour.component';

describe('HillCountryTourComponent', () => {
  let component: HillCountryTourComponent;
  let fixture: ComponentFixture<HillCountryTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HillCountryTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HillCountryTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
