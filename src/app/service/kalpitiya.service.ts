import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import KalpitiyaReviewDTO from '../dto/KalpitiyaReviewDTO';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KalpitiyaService {

  baseUrl = environment.baseUrl9;
  constructor(private http: HttpClient) { }
  public saveReview(messages: KalpitiyaReviewDTO): Observable<any> {
    return this.http.post(this.baseUrl + 'saveReview', {
      name: messages.name,
      comment: messages.comment
    });
  }
  public getAllReviews(): Observable<any> {
    return this.http.get(this.baseUrl + 'getAllReviews');
  }
}
