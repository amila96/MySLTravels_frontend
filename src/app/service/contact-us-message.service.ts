import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import ContactUsMessageDTO from '../dto/ContactUsMessageDTO';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsMessageService {

  baseUrl = environment.baseUrl2;
  constructor(private http: HttpClient) {
  }

  public saveMessage(messages: ContactUsMessageDTO): Observable<any> {
    return this.http.post(this.baseUrl + 'saveMessage', {
      name: messages.name,
      email: messages.email,
      subject: messages.subject,
      message: messages.message
    });
  }

  public getAllMessages(): Observable<any> {
    return this.http.get(this.baseUrl + 'getAllMessages');
  }

  public deleteMessage(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/deleteMessage',
      {headers: {id}});
  }

}

