import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-your-order',
  templateUrl: './view-your-order.component.html',
  styleUrls: ['./view-your-order.component.scss']
})
export class ViewYourOrderComponent implements OnInit {
  foodName: any = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'Foodtype', 'Food', 'price'];
  dataSource = JSON.parse(localStorage.getItem("orders") || "[]")

  back = () => this.router.navigate(['/customer']);
}
