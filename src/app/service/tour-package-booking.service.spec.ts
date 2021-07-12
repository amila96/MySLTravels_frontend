import { TestBed } from '@angular/core/testing';

import { TourPackageBookingService } from './tour-package-booking.service';

describe('TourPackageBookingService', () => {
  let service: TourPackageBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourPackageBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
