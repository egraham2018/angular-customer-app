import { Component, OnInit } from '@angular/core';
import {ICustomer} from './shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  // template: '<h1>{{ title }}</h1>',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title: string | undefined;
  people: ICustomer[] = [];
  isVisible = true;

  constructor() {}

  ngOnInit(): void {
    this.title = 'Hello World';
    this.people = [
      {id: 1, name: 'John Doe', city: 'New York', orderTotal: 3.14, customerSince: new Date(2021, 9, 10)},
      {id: 2, name: 'Jane Doe', city: 'New York', orderTotal: 3.14, customerSince: new Date(2021, 9, 10)}
    ];
  }

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }
}
