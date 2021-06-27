import { Component, OnInit } from '@angular/core';
import {ContactUsMessageService} from '../../service/contact-us-message.service';
import ContactUsMessageDTO from '../../dto/ContactUsMessageDTO';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})



export class ContactUsComponent implements OnInit {

  constructor(private contactUsMessageService: ContactUsMessageService) {
  }

  CustomerName = '';
  CustomerEmail = '';
  CustomerSubject = '';
  CustomerMessage = '';


  contactUsMessageList: any[] = [];

  selectedMessage: any = null;

  ngOnInit(): void {
    this.loadAllMessages();
  }

  loadAllMessages() {
    this.contactUsMessageService.getAllMessages().subscribe(response => {
      this.contactUsMessageList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  saveMessage() {

    const dto = new ContactUsMessageDTO(
      this.CustomerName.trim(),
      this.CustomerEmail.trim(),
      this.CustomerSubject.trim(),
      this.CustomerMessage.trim(),
    );

    this.contactUsMessageService.saveMessage(dto).subscribe(resp => {
      alert(resp.message);
    }, error => {
      console.log(error);
    });
  }

}
