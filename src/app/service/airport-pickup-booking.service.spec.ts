import { TestBed } from '@angular/core/testing';

import { AirportPickupBookingService } from './airport-pickup-booking.service';

describe('AirportPickupBookingService', () => {
  let service: AirportPickupBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirportPickupBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
