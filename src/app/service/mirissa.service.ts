import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import MirissaReviewDTO from '../dto/MirissaReviewDTO';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MirissaService {

  baseUrl = environment.baseUrl10;
  constructor(private http: HttpClient) { }
  public saveReview(messages: MirissaReviewDTO): Observable<any> {
    return this.http.post(this.baseUrl + 'saveReview', {
      name: messages.name,
      comment: messages.comment
    });
  }
  public getAllReviews(): Observable<any> {
    return this.http.get(this.baseUrl + 'getAllReviews');
  }
}


