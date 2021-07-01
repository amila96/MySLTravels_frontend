import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import HikkaduwaReviewDTO from '../dto/HikkaduwaReviewDTO';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HikkaduwaService {

  baseUrl = environment.baseUrl7;
  constructor(private http: HttpClient) { }
  public saveReview(messages: HikkaduwaReviewDTO): Observable<any> {
    return this.http.post(this.baseUrl + 'saveReview', {
      name: messages.name,
      comment: messages.comment
    });
  }
  public getAllReviews(): Observable<any> {
    return this.http.get(this.baseUrl + 'getAllReviews');
  }
}
