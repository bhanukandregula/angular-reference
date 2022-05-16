import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of salesPerson objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Bhanu","Kandregula","bkandreg@random.com", 1000),
    new SalesPerson("Josh", "Fodale", "josh@random.com", 2000),
    new SalesPerson("Spencer", "white", "white@random.com", 10000)
  ];
  
  
  constructor() { }


  ngOnInit(): void {
  }

}
