import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPackageBookingComponent } from './tour-package-booking.component';

describe('TourPackageBookingComponent', () => {
  let component: TourPackageBookingComponent;
  let fixture: ComponentFixture<TourPackageBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourPackageBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourPackageBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
