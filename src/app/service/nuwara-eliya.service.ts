import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import NuwaraEliyaReviewDTO from '../dto/NuwaraEliyaReviewDTO';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NuwaraEliyaService {

  baseUrl = environment.baseUrl11;
  constructor(private http: HttpClient) { }
  public saveReview(messages: NuwaraEliyaReviewDTO): Observable<any> {
    return this.http.post(this.baseUrl + 'saveReview', {
      name: messages.name,
      comment: messages.comment
    });
  }
  public getAllReviews(): Observable<any> {
    return this.http.get(this.baseUrl + 'getAllReviews');
  }
}
