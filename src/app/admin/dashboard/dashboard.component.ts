import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

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
  createRestaurant = () => this.router.navigate(['/create-restaurant'])
  viewOrder = () => this.router.navigate(['/view-order-list'])
  logout = () => this.router.navigate(['/']);
}
