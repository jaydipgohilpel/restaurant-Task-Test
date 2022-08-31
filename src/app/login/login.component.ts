import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData: any;
  constructor(private router: Router) {
    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", JSON.stringify([]));
    }
  }
  data: any;
  ngOnInit(): void {
  }
  onSubmit(formdata: any) {
    if (formdata.valid) {
      if (formdata.value.email === 'admin@gmail.com') {
        this.router.navigate(['admindashboard']);
      }
      else {
        this.router.navigate(['/customer']);
      }
    }
  }
}
