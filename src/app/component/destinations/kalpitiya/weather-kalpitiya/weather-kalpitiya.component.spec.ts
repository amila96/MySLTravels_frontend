import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherKalpitiyaComponent } from './weather-kalpitiya.component';

describe('WeatherKalpitiyaComponent', () => {
  let component: WeatherKalpitiyaComponent;
  let fixture: ComponentFixture<WeatherKalpitiyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherKalpitiyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherKalpitiyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
