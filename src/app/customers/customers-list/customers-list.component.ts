import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
  // styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  filteredCustomers: any[] = [];
  customersOrderTotal = 0;
  currencyCode = 'USD';

  constructor() {
    this.filteredCustomers = [
      {id: 1, name: 'John Doe', city: 'New York', orderTotal: 3.14, customerSince: new Date(2021, 9, 10)},
      {id: 2, name: 'Jane Doe', city: 'New York', orderTotal: 3.14, customerSince: new Date(2021, 9, 10)}
    ];
  }

  ngOnInit(): void {}

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }

  sort(prop: string) {
    //
  }
}
