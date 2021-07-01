import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import GalleFortReviewDTO from '../dto/GalleFortReviewDTO';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleFortService {

  baseUrl = environment.baseUrl6;
  constructor(private http: HttpClient) { }
  public saveReview(messages: GalleFortReviewDTO): Observable<any> {
    return this.http.post(this.baseUrl + 'saveReview', {
      name: messages.name,
      comment: messages.comment
    });
  }
  public getAllReviews(): Observable<any> {
    return this.http.get(this.baseUrl + 'getAllReviews');
  }
}
