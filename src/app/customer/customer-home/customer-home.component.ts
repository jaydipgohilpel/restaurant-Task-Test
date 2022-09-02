import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerhomeComponent implements OnInit {
  data: any;
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  createRestaurant=()=>this.router.navigate(['/create-order']);
  viewOrder=()=>this.router.navigate(['/view-your-list']);
  logout=()=>this.router.navigate(['/']);
}
