import { Component, inject, OnInit } from '@angular/core';
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
    let data = [];
    data = JSON.parse(localStorage.getItem("user") || "[]");
    let flag = true;
    data.forEach((e: any) => {
      if (formdata.value.email === e.email && formdata.value.password === e.password) {
        flag = false;
        const pageUrl = e.role === "admin" ? ['admin-dashboard'] : ['customer'];
        this.router.navigate(pageUrl);
      }
    });
    if (flag) { alert("Invalid Username and Password") }
  }
}
