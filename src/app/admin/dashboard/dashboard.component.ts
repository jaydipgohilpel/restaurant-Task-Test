import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  createRestaurant() {
    this.router.navigate(['/Create-restaurant']);
  }
  viewOrder() {
    this.router.navigate(['/View-order-list']);
  }
  logout() {
    this.router.navigate(['/']);
  }
}
