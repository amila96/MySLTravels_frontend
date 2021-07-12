import { Component, OnInit } from '@angular/core';
import {TourPackageBookingService} from '../../../service/tour-package-booking.service';
import TourPackageBookingsDTO from '../../../dto/TourPackageBookingsDTO';

@Component({
  selector: 'app-tour-package-booking',
  templateUrl: './tour-package-booking.component.html',
  styleUrls: ['./tour-package-booking.component.scss']
})
export class TourPackageBookingComponent implements OnInit {

  constructor(private tourPackageBookingService: TourPackageBookingService) { }

  TpBookingCusName='';
  TpBookingCusPassNum=0;
  TpBookingCusEmail='';
  TpBookingCusCountry='';
  TpBookingCusLanguage='';
  TpBookingVehicle='';
  TpBookingNumOfTrevellers=0;
  TpBookingDate='';
  TpBookingRoomType='';
  TpBookingNumOfRooms=0;
  TpBookingTourGuide='';

  tourPackageBookingList: any[] = [];

  selectedBooking: any = null;

  ngOnInit(): void {
    this.loadAllBookings();
  }

  loadAllBookings() {
    this.tourPackageBookingService.getAllTpBookings().subscribe(response => {
      this.tourPackageBookingList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  saveTpBooking() {
    const dto = new TourPackageBookingsDTO(
      this.TpBookingCusName.trim(),
      Number(this.TpBookingCusPassNum),
      this.TpBookingCusEmail.trim(),
      this.TpBookingCusCountry.trim(),
      this.TpBookingCusLanguage.trim(),
      this.TpBookingVehicle.trim(),
      Number(this.TpBookingNumOfTrevellers),
      this.TpBookingDate.trim(),
      this.TpBookingRoomType.trim(),
      Number(this.TpBookingNumOfRooms),
      this.TpBookingTourGuide.trim()
    );
    this.tourPackageBookingService.saveTpBooking(dto).subscribe(resp=> {
      alert(resp.message);
    }, error => {
      console.log(error);
    });
  }
}


