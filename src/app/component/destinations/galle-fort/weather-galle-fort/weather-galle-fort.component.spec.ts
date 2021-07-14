import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGalleFortComponent } from './weather-galle-fort.component';

describe('WeatherGalleFortComponent', () => {
  let component: WeatherGalleFortComponent;
  let fixture: ComponentFixture<WeatherGalleFortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherGalleFortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherGalleFortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
