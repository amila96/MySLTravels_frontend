import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import EllaReviewDTO from '../dto/EllaReviewDTO';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EllaReviewService {

  baseUrl = environment.baseUrl5;
  constructor(private http: HttpClient) { }
  public saveReview(messages: EllaReviewDTO): Observable<any> {
    return this.http.post(this.baseUrl + 'saveReview', {
      name: messages.name,
      comment: messages.comment
    });
  }
  public getAllReviews(): Observable<any> {
    return this.http.get(this.baseUrl + 'getAllReviews');
  }
}


