import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherEllaComponent } from './weather-ella.component';

describe('WeatherEllaComponent', () => {
  let component: WeatherEllaComponent;
  let fixture: ComponentFixture<WeatherEllaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherEllaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherEllaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
