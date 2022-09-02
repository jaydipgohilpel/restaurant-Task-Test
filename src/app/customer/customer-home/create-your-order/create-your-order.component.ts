import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

type FoodType = {
  Food: string;
  Foodtype: string;
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-createyourorder',
  templateUrl: './create-your-order.component.html',
  styleUrls: ['./create-your-order.component.scss']
})
export class CreateyourorderComponent implements OnInit {
  displayedColumns: string[] = ['name', 'Foodtype', 'Food', 'price', 'makeorder'];
  dataSource: MatTableDataSource<FoodType>;
  foodName: any = [];
  filterSelectObj: any = [];
  filterValues: any = {};
  restoruntName: any;
  allOreder: any;
  public modeselect = 'asc';
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private router: Router) {
    this.allOreder = JSON.parse(localStorage.getItem("restoran") || "[]")
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

    this.restoruntName = this.allOreder;
  }
  async ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    setTimeout(() => this.sortingOrderChange('asc'), 0)
  }

  placeOrder(orderData: any) {
    let data = [];
    data = JSON.parse(localStorage.getItem("orders") || "[]");
    orderData.id = data.length + 1;
    data.push(orderData);
    localStorage.setItem("orders", JSON.stringify(data));
    alert("Your Order is Created")
  }

  back = () => this.router.navigate(['/customer']);

  filterChange(filter: any, event: any) {
    console.log(filter);
    const filterValue = event;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async sortingOrderChange(priceRange: any) {
    this.dataSource.sort = this.sort;
    if (priceRange == "asc") {
      let sortState: Sort = { active: 'price', direction: 'asc' };
      this.dataSource.sort.active = sortState.active;
      this.dataSource.sort.direction = sortState.direction;
      this.dataSource.sort.sortChange.emit(sortState);
    }
    else if (priceRange == "desc") {
      let sortState: Sort = { active: 'price', direction: 'desc' };
      this.dataSource.sort.active = sortState.active;
      this.dataSource.sort.direction = sortState.direction;
      this.dataSource.sort.sortChange.emit(sortState);
    }
    else {
      this.dataSource = new MatTableDataSource(this.allOreder);
    }
  }
}




