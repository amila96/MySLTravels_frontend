/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airport-pickup-booking',
  templateUrl: './airport-pickup-booking.component.html',
  styleUrls: ['./airport-pickup-booking.component.scss']
})
export class AirportPickupBookingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/
/////////////////////
import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../service/customer.service";
import CustomerDTO from "../../../dto/CustomerDTO";

@Component({
  selector: 'app-airport-pickup-booking',
  templateUrl: './airport-pickup-booking.component.html',
  styleUrls: ['./airport-pickup-booking.component.scss']
})



export class AirportPickupBookingComponent implements OnInit {

  constructor(private customerService: CustomerService) {
  }

  customerName = '';
  customerAddress = '';
  customerSalary = 0;
  /*pickupLocation = '';
  distance = 0;*/
  /*customerNameForUpdate = '';
  customerAddressForUpdate = '';
  customerSalaryForUpdate = 0;*/


  customerList: any[] = [];

  selectedCustomer: any = null;

  ngOnInit(): void {
    this.loadAllCustomers();
  }

  loadAllCustomers() {
    this.customerService.getAllCustomers().subscribe(response => {
      this.customerList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  saveCustomer() {

    const dto = new CustomerDTO(
      this.customerName.trim(),
      this.customerAddress.trim(),
      Number(this.customerSalary),
      'no-image',
      [],
         );

    this.customerService.saveCustomer(dto).subscribe(resp => {
      alert(resp.message);
    }, error => {
      console.log(error);
    });
  }

  /*deleteCustomer(_id: string) {
    if (confirm('Are You sure?')) {
      this.customerService.deleteCustomer(_id).subscribe(respose => {
        this.loadAllCustomers();
        alert('Deleted!');
      }, error => {
        console.log(error);
      });
    }
  }*/

  /*openModel(customer: any) {
    this.selectedCustomer = customer;
    /!* const btn = document.getElementById('updatebutton') as HTMLElement;
     btn.click();*!/
    document.getElementById('updatebutton').click();
  }*/

  /*updateCustomer() {
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
