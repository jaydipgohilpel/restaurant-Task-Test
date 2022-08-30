import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.scss']
})
export class CustomerhomeComponent implements OnInit {
  data:any;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  createRestaurant()
  {
    this.router.navigate(['/Create-order']);
  }
  viewOrder()
  {
    this.router.navigate(['/View-Your-List']);
  }
  logout()
  {
    this.router.navigate(['/']);
  }
}
