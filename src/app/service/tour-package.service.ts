import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import TourPackageDTO from "../dto/TourPackageDTO";

@Injectable({
  providedIn: 'root'
})
export class TourPackageService {
  baseUrl = environment.baseUrl12;
  constructor(private http: HttpClient) {
  }
  public saveTourPackage(tourPackage: TourPackageDTO): Observable<any> {
    return this.http.post(this.baseUrl+'saveTourPackage', {
      tourPackageName: tourPackage.tourPackageName,
      description: tourPackage.description,
      days: tourPackage.days,
      hotels: tourPackage.hotels,
      visitingPlaces: tourPackage.visitingPlaces,
      activities: tourPackage.activities,
      schedule: tourPackage.schedule,
    });
  }

  public getAllTourPackages(): Observable<any> {
    return this.http.get(this.baseUrl+'getAllTourPackages');
  }

  public deleteTourPackage(id: string): Observable<any> {
    return this.http.delete(this.baseUrl+'/deleteTourPackage',
      {headers: {id}});
  }

  /*PUT --> BODY*/
  public updateTourPackage(dto:TourPackageDTO, id:string): Observable<any> {
    return this.http.put(this.baseUrl+'updateTourPackage',
      {
        tourPackageName: dto.tourPackageName,
        description: dto.description,
        days: dto.days,
        hotels: dto.hotels,
        visitingPlaces: dto.visitingPlaces,
        activities: dto.activities,
        schedule: dto.schedule,
        id:id
      });
  }
}
