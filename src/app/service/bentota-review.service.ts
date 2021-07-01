import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import BentotaReviewDTO from '../dto/BentotaReviewDTO';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BentotaReviewService {

  baseUrl = environment.baseUrl4;
  constructor(private http: HttpClient) {
  }
  public saveReview(messages: BentotaReviewDTO): Observable<any> {
    return this.http.post(this.baseUrl + 'saveReview', {
      name: messages.name,
      comment: messages.comment
    });
  }
  public getAllReviews(): Observable<any> {
    return this.http.get(this.baseUrl + 'getAllReviews');
  }
}

