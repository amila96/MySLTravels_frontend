import { Component, OnInit } from '@angular/core';
import {ContactUsMessageService} from '../../service/contact-us-message.service';
import ContactUsMessageDTO from '../../dto/ContactUsMessageDTO';
import {AirportPickupBookingService} from '../../service/airport-pickup-booking.service';
import AirportPickupBookingsDTO from '../../dto/AirportPickupBookingsDTO';
import { animate, style, transition, trigger} from '@angular/animations';
import {logger} from "codelyzer/util/logger";

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

  constructor(private contactUsMessageService: ContactUsMessageService, private airportPickupBookingService: AirportPickupBookingService) {
  }

  contactUsMessageList: any[] = [];

  airportPickupBookingList: any[] = [];


  ngOnInit(): void {
    this.loadAllMessages();
    this.loadAllAirportPickupBookings();
  }

  leftSideVisibleState= false;

  toggleSlide(){
    this.leftSideVisibleState=!this.leftSideVisibleState;
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

  loadAllAirportPickupBookings(){
    this.airportPickupBookingService.getAllAirBookings().subscribe(response => {
      this.airportPickupBookingList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  deleteAirportPickupBooking(_id: string){
    if (confirm('Are you sure?')) {
      this.airportPickupBookingService.deleteAirBooking(_id).subscribe(respose => {
        this.loadAllAirportPickupBookings();
        alert('Deleted!');
      }, error => {
        console.log(error);
      });
    }
  }

}
