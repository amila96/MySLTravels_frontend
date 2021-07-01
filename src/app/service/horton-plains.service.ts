import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import HortonPlainsReviewDTO from '../dto/HortonPlainsReviewDTO';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HortonPlainsService {

  baseUrl = environment.baseUrl8;
  constructor(private http: HttpClient) { }
  public saveReview(messages: HortonPlainsReviewDTO): Observable<any> {
    return this.http.post(this.baseUrl + 'saveReview', {
      name: messages.name,
      comment: messages.comment
    });
  }
  public getAllReviews(): Observable<any> {
    return this.http.get(this.baseUrl + 'getAllReviews');
  }
}
