import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherMirissaComponent } from './weather-mirissa.component';

describe('WeatherMirissaComponent', () => {
  let component: WeatherMirissaComponent;
  let fixture: ComponentFixture<WeatherMirissaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherMirissaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherMirissaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
