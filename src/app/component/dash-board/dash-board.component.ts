import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import CustomerDTO from "../../dto/CustomerDTO";
import {ContactUsMessageService} from "../../service/contact-us-message.service";
import ContactUsMessageDTO from '../../dto/ContactUsMessageDTO';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})



export class DashBoardComponent implements OnInit {

  constructor(private customerService: CustomerService, private contactUsMessageService: ContactUsMessageService) {
  }

  customerName = '';
  customerAddress = '';
  customerSalary = 0;
  pickupLocation='';
  distance=0;
  customerNameForUpdate = '';
  customerAddressForUpdate = '';
  customerSalaryForUpdate = 0;



  customerList: any[] = [];
  contactUsMessageList: any[] = [];
  airportCustomerName = '';
  airportCustomerEmail = '';
  airportCustomerSubject = '';
  airportCustomerMessage = '';

  selectedCustomer: any = null;

  ngOnInit(): void {
    this.loadAllCustomers();
    this.loadAllMessages();
  }

  loadAllCustomers() {
    this.customerService.getAllCustomers().subscribe(response => {
      this.customerList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }
  deleteCustomer(_id: string) {
    if (confirm('Are You sure?')) {
      this.customerService.deleteCustomer(_id).subscribe(respose => {
        this.loadAllCustomers();
        alert('Deleted!');
      }, error => {
        console.log(error);
      });
    }
  }
  loadAllMessages() {
    this.contactUsMessageService.getAllMessages().subscribe(response => {
      this.contactUsMessageList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }
  deleteMessage(_id: string) {
    if (confirm('Are You sure?')) {
      this.contactUsMessageService.deleteMessage(_id).subscribe(respose => {
        this.loadAllMessages();
        alert('Deleted!');
      }, error => {
        console.log(error);
      });
    }
  }


 /* saveCustomer() {

    const dto = new CustomerDTO(
      this.customerName.trim(),
      this.customerAddress.trim(),
      Number(this.customerSalary),
      'no-image',
      []
    );

    this.customerService.saveCustomer(dto).subscribe(resp => {
      alert(resp.message);
    }, error => {
      console.log(error);
    });
  }*/



  /*openModel(customer: any) {
    this.selectedCustomer = customer;
    /!* const btn = document.getElementById('updatebutton') as HTMLElement;
     btn.click();*!/
    document.getElementById('updatebutton').click();
  }*/

 /* updateCustomer() {
    const dto = new CustomerDTO(
      this.customerNameForUpdate.trim(),
      this.customerAddressForUpdate.trim(),
      Number(this.customerSalaryForUpdate),
      '',
      [],
    );
    this.customerService.updateCustomer(dto, this.selectedCustomer._id).subscribe(response => {
      alert('Updated');
    }, error => {
      console.log(error);
    });
  }*/


}
