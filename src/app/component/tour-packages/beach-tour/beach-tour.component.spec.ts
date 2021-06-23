import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachTourComponent } from './beach-tour.component';

describe('BeachTourComponent', () => {
  let component: BeachTourComponent;
  let fixture: ComponentFixture<BeachTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
