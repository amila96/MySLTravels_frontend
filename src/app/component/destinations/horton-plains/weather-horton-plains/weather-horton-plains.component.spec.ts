import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHortonPlainsComponent } from './weather-horton-plains.component';

describe('WeatherHortonPlainsComponent', () => {
  let component: WeatherHortonPlainsComponent;
  let fixture: ComponentFixture<WeatherHortonPlainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherHortonPlainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHortonPlainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
