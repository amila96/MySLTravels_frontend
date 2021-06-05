import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HortonPlainsComponent } from './horton-plains.component';

describe('HortonPlainsComponent', () => {
  let component: HortonPlainsComponent;
  let fixture: ComponentFixture<HortonPlainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HortonPlainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HortonPlainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
