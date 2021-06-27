import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import AirportPickupBookingsDTO from '../dto/AirportPickupBookingsDTO';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirportPickupBookingService {

  baseUrl = environment.baseUrl3;
  constructor(private http: HttpClient) {
  }

  public saveAirBooking(messages: AirportPickupBookingsDTO): Observable<any>{
    return this.http.post(this.baseUrl + 'saveAirBooking', {
      name: messages.name,
      passportNumber: messages.passportNumber,
      email: messages.email,
      numberOfPassengers: messages.numberOfPassengers,
      vehicleType: messages.vehicleType,
      date: messages.date,
      time: messages.time,
      location: messages.location,
      distance: messages.distance
    });
  }
  public getAllAirBookings(): Observable<any>{
    return this.http.get(this.baseUrl + 'getAllAirBookings');
  }
  public deleteAirBooking(_id: string): Observable<any>{
    return this.http.delete(this.baseUrl + 'deleteAirBooking', {headers: {_id}});
  }
}
