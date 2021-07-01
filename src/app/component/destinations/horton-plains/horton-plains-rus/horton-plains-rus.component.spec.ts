import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HortonPlainsRusComponent } from './horton-plains-rus.component';

describe('HortonPlainsRusComponent', () => {
  let component: HortonPlainsRusComponent;
  let fixture: ComponentFixture<HortonPlainsRusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HortonPlainsRusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HortonPlainsRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
