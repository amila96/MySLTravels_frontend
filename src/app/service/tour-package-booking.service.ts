import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import TourPackageBookingsDTO from '../dto/TourPackageBookingsDTO';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TourPackageBookingService {

  baseUrl = environment.baseUrl13;
  constructor(private http: HttpClient) {
  }
  public saveTpBooking(messages: TourPackageBookingsDTO): Observable<any>{
    return this.http.post(this.baseUrl + 'saveTpBooking', {
      name: messages.name,
      passportNumber: messages.passportNumber,
      email: messages.email,
      country: messages.country,
      language: messages.language,
      vehicleType: messages.vehicleType,
      numberOfTravellers: messages.numberOfTravellers,
      date: messages.date,
      hotelRoomType: messages.hotelRoomType,
      numberOfRooms: messages.numberOfRooms,
      tourGuide: messages.tourGuide
    });
  }
  public getAllTpBookings(): Observable<any>{
    return this.http.get(this.baseUrl + 'getAllTpBookings');
  }
  public deleteTpBooking(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + 'deleteTourPackage',
      {headers: {id}});
  }
}
