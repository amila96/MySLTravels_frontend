import { Component, OnInit } from '@angular/core';
import {AirportPickupBookingService} from '../../../service/airport-pickup-booking.service';
import AirportPickupBookingsDTO from '../../../dto/AirportPickupBookingsDTO';

@Component({
  selector: 'app-airport-pickup-booking',
  templateUrl: './airport-pickup-booking.component.html',
  styleUrls: ['./airport-pickup-booking.component.scss']
})
export class AirportPickupBookingComponent implements OnInit {

  constructor(private airportPickupBookingService: AirportPickupBookingService) {
  }

  AirPickBookingCusName = '';
  AirPickBookingCusPassport = 0;
  AirPickBookingEmail = '';
  AirPickBookingNumOfCus = 0;
  AirPickBookingVehicle = '';
  AirPickBookingArrivalDate = '';
  AirPickBookingArrivalTime = '';
  AirPickBookingPickLocation = '';
  AirPickBookingDistance = 0;

airportPickupBookingList: any[] = [];

selectedBooking: any = null;



  ngOnInit(): void {
    this.loadAllBookings();
  }

  loadAllBookings() {
    this.airportPickupBookingService.getAllAirBookings().subscribe(response => {
      this.airportPickupBookingList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  saveBooking() {
    const dto = new AirportPickupBookingsDTO(
      this.AirPickBookingCusName.trim(),
      Number(this.AirPickBookingCusPassport),
      this.AirPickBookingEmail.trim(),
      Number(this.AirPickBookingNumOfCus),
      this.AirPickBookingVehicle.trim(),
      this.AirPickBookingArrivalDate.trim(),
      this.AirPickBookingArrivalTime.trim(),
      this.AirPickBookingPickLocation.trim(),
      Number(this.AirPickBookingDistance),
    );
    this.airportPickupBookingService.saveAirBooking(dto).subscribe(resp=> {
      alert(resp.message);
    }, error => {
      console.log(error);
      });
  }
}

