import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['name', 'customerName', 'Foodtype', 'Food', 'price'];
  dataSource = JSON.parse(localStorage.getItem("orders") || "[]")
  back = () => this.router.navigate(['admin-dashboard']);
}
