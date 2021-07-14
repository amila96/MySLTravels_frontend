import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherNuwaraEliyaComponent } from './weather-nuwara-eliya.component';

describe('WeatherNuwaraEliyaComponent', () => {
  let component: WeatherNuwaraEliyaComponent;
  let fixture: ComponentFixture<WeatherNuwaraEliyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherNuwaraEliyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherNuwaraEliyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
