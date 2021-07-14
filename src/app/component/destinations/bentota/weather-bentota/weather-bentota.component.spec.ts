import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBentotaComponent } from './weather-bentota.component';

describe('WeatherBentotaComponent', () => {
  let component: WeatherBentotaComponent;
  let fixture: ComponentFixture<WeatherBentotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherBentotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherBentotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
