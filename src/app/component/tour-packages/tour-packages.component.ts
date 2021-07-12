import { Component, OnInit } from '@angular/core';
import { TourPackageService } from '../../service/tour-package.service';
import TourPackageDTO from '../../dto/TourPackageDTO';
import { OwnTourPackageService } from '../../service/own-tour-package.service';
import OwnTourPackageDTO from '../../dto/OwnTourPackageDTO';
/*import ContactUsMessageDTO from "../../dto/ContactUsMessageDTO";*/

@Component({
  selector: 'app-tour-packages',
  templateUrl: './tour-packages.component.html',
  styleUrls: ['./tour-packages.component.scss']
})
export class TourPackagesComponent implements OnInit {

  constructor(private tourPackageService: TourPackageService, private ownTourPackageService: OwnTourPackageService) { }

  ngOnInit(): void {
    this.loadAllTourPackages();
    this.loadAllOwnTourPackages();
  }
  tourPackageName = '';
  description = '';
  days = 0;
  hotels = '';
  visitingPlaces = '';
  activities = '';
  schedule = '';

  tourPackageList: any[] = [];

  OwnTpBookingCusName = '';
  OwnTpBookingCusPassNum = 0;
  OwnTpBookingCusEmail = '';
  OwnTpBookingCusCountry = '';
  OwnTpBookingDate = '';
  OwnTpBookingPlaces = '';
  OwnTpBookingActivities = '';
  OwnTpBookingVehicle = '';
  OwnTpBookingHotel='';
  OwnTpBookingNumOfTrevellers = 0;
  OwnTpBookingTourGuide = '';

  ownTourPackageList: any[] = [];

  selectedOwnTourPackage: any = null;

  loadAllTourPackages() {
    this.tourPackageService.getAllTourPackages().subscribe(response => {
      this.tourPackageList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  ////////////////



  loadAllOwnTourPackages() {
    this.ownTourPackageService.getAllOwnTourPackages().subscribe(response => {
      this.ownTourPackageList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  saveOwnTpBooking() {
    const dto = new OwnTourPackageDTO(
      this.OwnTpBookingCusName.trim(),
      Number(this.OwnTpBookingCusPassNum),
      this.OwnTpBookingCusEmail.trim(),
      this.OwnTpBookingCusCountry.trim(),
      this.OwnTpBookingDate.trim(),
      this.OwnTpBookingPlaces.trim(),
      this.OwnTpBookingActivities.trim(),
      this.OwnTpBookingVehicle.trim(),
      this.OwnTpBookingHotel.trim(),
      Number(this.OwnTpBookingNumOfTrevellers),
      this.OwnTpBookingTourGuide.trim()
    );

    this.ownTourPackageService.saveOwnTourpackage(dto).subscribe(resp => {
      alert(resp.message);
    }, error => {
      console.log(error);
    });
  }
}
