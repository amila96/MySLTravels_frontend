import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHikkaduwaComponent } from './weather-hikkaduwa.component';

describe('WeatherHikkaduwaComponent', () => {
  let component: WeatherHikkaduwaComponent;
  let fixture: ComponentFixture<WeatherHikkaduwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherHikkaduwaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHikkaduwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
