import { Component, OnInit } from '@angular/core';
import {ContactUsMessageService} from '../../service/contact-us-message.service';
import ContactUsMessageDTO from '../../dto/ContactUsMessageDTO';
import {AirportPickupBookingService} from '../../service/airport-pickup-booking.service';
import AirportPickupBookingsDTO from '../../dto/AirportPickupBookingsDTO';
import { animate, style, transition, trigger} from '@angular/animations';
import {logger} from "codelyzer/util/logger";
import { TourPackageService } from '../../service/tour-package.service';
import TourPackageDTO from '../../dto/TourPackageDTO';
import { TourPackageBookingService } from '../../service/tour-package-booking.service';
import TourPackageBookingsDTO from '../../dto/TourPackageBookingsDTO';
import { OwnTourPackageService } from '../../service/own-tour-package.service';
import OwnTourPackageDTO from '../../dto/OwnTourPackageDTO';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
  animations:[
    trigger( 'sliderLeft',[
      transition('void=>*',[
        style( {transform:'translateX(-100%)'}),
        animate('0.5s')
      ]),
      transition('*=>void',[
        animate( '0.5s',style({ transform:'translateX(-100%)'}))
      ])
    ])
  ]
})

export class DashBoardComponent implements OnInit {

  constructor(private contactUsMessageService: ContactUsMessageService, private airportPickupBookingService: AirportPickupBookingService, private tourPackageService: TourPackageService, private tourPackageBookingService: TourPackageBookingService, private ownTourPackageService: OwnTourPackageService) {
  }

  contactUsMessageList: any[] = [];

  airportPickupBookingList: any[] = [];

  tourPackageBookingList: any[] = [];

  ownTourPackageList: any[] = [];


  ngOnInit(): void {
    this.loadAllMessages();
    this.loadAllAirportPickupBookings();
    this.loadAllTourPackages();
    this.loadAllTourPackagesBookings();
    this.loadAllOwnTourPackages();
  }

  leftSideVisibleState = false;

  tourPackageName = '';
  description = '';
  days = 0;
  hotels = '';
  visitingPlaces = '';
  activities = '';
  schedule = '';

  tourPackageList: any[] = [];

  selectedTourPackage: any = null;
  tourPackageNameForUpdate = '';
  tourPackageDescriptionForUpdate = '';
  tourPackageDaysForUpdate = 0;
  TourPackageHotelsForUpdate = '';
  TourPackageVisitingPlacesForUpdate = '';
  TourPackageActivitiesForUpdate = '';
  TourPackageScheduleForUpdate = '';

  toggleSlide() {
    this.leftSideVisibleState = !this.leftSideVisibleState;
  }

  loadAllMessages() {
    this.contactUsMessageService.getAllMessages().subscribe(response => {
      this.contactUsMessageList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  deleteMessage(_id: string) {
    if (confirm('Are You sure?')) {
      this.contactUsMessageService.deleteMessage(_id).subscribe(respose => {
        this.loadAllMessages();
        alert('Deleted!');
      }, error => {
        console.log(error);
      });
    }
  }

  loadAllAirportPickupBookings() {
    this.airportPickupBookingService.getAllAirBookings().subscribe(response => {
      this.airportPickupBookingList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  deleteAirportPickupBooking(_id: string) {
    if (confirm('Are you sure?')) {
      this.airportPickupBookingService.deleteAirBooking(_id).subscribe(respose => {
        this.loadAllAirportPickupBookings();
        alert('Deleted!');
      }, error => {
        console.log(error);
      });
    }
  }


  loadAllTourPackages() {
    this.tourPackageService.getAllTourPackages().subscribe(response => {
      this.tourPackageList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  saveTourPackage() {

    const dto = new TourPackageDTO(
      this.tourPackageName.trim(),
      this.description.trim(),
      Number(this.days),
      this.hotels.trim(),
      this.visitingPlaces.trim(),
      this.activities.trim(),
      this.schedule.trim(),
    );

    this.tourPackageService.saveTourPackage(dto).subscribe(resp => {
      alert(resp.message);
      this.loadAllTourPackages();
    }, error => {
      console.log(error);
    });
  }

  deleteTourPackage(_id: string) {
    if (confirm('Are You sure?')) {
      this.tourPackageService.deleteTourPackage(_id).subscribe(respose => {
        this.loadAllTourPackages();
        alert('Deleted!');
      }, error => {
        console.log(error);
      });
    }
  }

  openModel(tourPackage: any) {
    this.selectedTourPackage = tourPackage;
    /* const btn = document.getElementById('updatebutton') as HTMLElement;
     btn.click();*/
    document.getElementById('updatebutton').click();
  }

  /*updateTourPackage() {
    const dto = new TourPackageDTO(
      this.tourPackageNameForUpdate.trim(),
      this.tourPackageDescriptionForUpdate.trim(),
      Number(this.tourPackageDaysForUpdate),
      this.TourPackageHotelsForUpdate.trim(),
      this.TourPackageVisitingPlacesForUpdate.trim(),
      this.TourPackageActivitiesForUpdate.trim(),
      this.TourPackageScheduleForUpdate.trim(),
    );
    this.tourPackageService.updateTourPackage(dto, this.selectedTourPackage._id).subscribe(response => {
      alert('Updated');
    }, error => {
      console.log(error);
    });
  }*/
  updateTourPackage() {
    const dto = new TourPackageDTO(
      this.tourPackageName.trim(),
      this.description.trim(),
      Number(this.days),
      this.hotels.trim(),
      this.visitingPlaces.trim(),
      this.activities.trim(),
      this.schedule.trim(),
    );
    this.tourPackageService.updateTourPackage(dto, this.selectedTourPackage._id).subscribe(response => {
      alert('Updated');
      this.loadAllTourPackages();
    }, error => {
      console.log(error);
    });
  }

  loadAllTourPackagesBookings() {
    this.tourPackageBookingService.getAllTpBookings().subscribe(response => {
      this.tourPackageBookingList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  deleteTourPackageBooking(_id: string) {
    if (confirm('Are you sure?')) {
      this.tourPackageBookingService.deleteTpBooking(_id).subscribe(respose => {
        this.loadAllTourPackagesBookings();
        alert('Deleted!');
      }, error => {
        console.log(error);
      });
    }
  }


  loadAllOwnTourPackages() {
    this.ownTourPackageService.getAllOwnTourPackages().subscribe(response => {
      this.ownTourPackageList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  deleteOwnTourPackage(_id: string) {
    if (confirm('Are You sure?')) {
      this.ownTourPackageService.deleteOwnTourPackage(_id).subscribe(respose => {
        this.loadAllOwnTourPackages();
        alert('Deleted!');
      }, error => {
        console.log(error);
      });
    }
  }


}
