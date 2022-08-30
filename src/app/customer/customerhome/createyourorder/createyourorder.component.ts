import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createyourorder',
  templateUrl: './createyourorder.component.html',
  styleUrls: ['./createyourorder.component.scss']
})
export class CreateyourorderComponent implements OnInit {
  displayedColumns: string[] = ['name', 'Foodtype', 'Food', 'price', 'makeorder'];
  dataSource: MatTableDataSource<type>;

  foodName: any = [];
  filterSelectObj: any = [];
  filterValues: any = {};
  restoruntName: any;
  allOreder: any;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private router: Router) {

    this.allOreder = JSON.parse(localStorage.getItem("restoran") || "[]")
    // this.dataSource = allOreder;
    this.dataSource = new MatTableDataSource(this.allOreder);
  }


  ngOnInit(): void {
    this.filterSelectObj = [
      {
        name: 'Filter By Restorunt',
        columnProp: 'name',
        options: []
      },

    ];

    // const obj = {
    //   "Food": "Ganthiya",
    //   "Foodtype": "Gujarati",
    //   "id": 0,
    //   "name": "all",
    //   "price": 200
    // }
    this.restoruntName = this.allOreder;
    // this.restoruntName.unshift(obj)

  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  placeOrder(orderData: any) {

    let data = [];
    data = JSON.parse(localStorage.getItem("orders") || "[]");
    orderData.id = data.length + 1;
    data.push(orderData);
    localStorage.setItem("orders", JSON.stringify(data));
    alert("Your Order is Created")
  }

  back() {
    this.router.navigate(['/customer'])
  }
  filterChange(filter: any, event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  sortData(event:any)
  {

  }


}
export class type {

  Food!: string;
  Foodtype!: string;
  id!: number;
  name!: string;
  price!: number;
}

