import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportPickupBookingComponent } from './airport-pickup-booking.component';

describe('AirportPickupBookingComponent', () => {
  let component: AirportPickupBookingComponent;
  let fixture: ComponentFixture<AirportPickupBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportPickupBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportPickupBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
