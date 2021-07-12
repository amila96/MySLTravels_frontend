import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import OwnTourPackageDTO from '../dto/OwnTourPackageDTO';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OwnTourPackageService {

  baseUrl = environment.baseUrl14;

  constructor(private http: HttpClient) {
  }
  public saveOwnTourpackage(messages: OwnTourPackageDTO): Observable<any> {
    return this.http.post(this.baseUrl + 'saveOwnTourpackage', {
      name: messages.name,
      passportNumber: messages.passportNumber,
      email: messages.email,
      country: messages.country,
      date: messages.date,
      places: messages.places,
      activities: messages.activities,
      vehicle: messages.vehicle,
      hotel: messages.hotel,
      NumOfTravellers: messages.NumOfTravellers,
      tourGuide: messages.tourGuide
    });
  }

  public getAllOwnTourPackages(): Observable<any> {
    return this.http.get(this.baseUrl + 'getAllOwnTourPackages');
  }

  public deleteOwnTourPackage(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/deleteOwnTourPackage',
      {headers: {id}});
  }
}

