import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HortonPlainsGerComponent } from './horton-plains-ger.component';

describe('HortonPlainsGerComponent', () => {
  let component: HortonPlainsGerComponent;
  let fixture: ComponentFixture<HortonPlainsGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HortonPlainsGerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HortonPlainsGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
