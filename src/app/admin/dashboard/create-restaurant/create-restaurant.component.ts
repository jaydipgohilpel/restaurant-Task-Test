import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.scss']
})
export class CreateRestaurantComponent implements OnInit {
  foodName: any = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onChange(Foodtype: any) {
    if (Foodtype.value == 'Gujarati') {
      this.foodName = ['Fafda, Khakhra','Ganthiya','Gujarati Dal','Undhiyu','Thepla','Rotlo'];
    }
    else if (Foodtype.value == 'punjabi') {
      this.foodName = ['Paneer Tikka', 'Punjabi Pakoda Kadhi', 'Rajma Chawal'];
    }
    else if (Foodtype.value == 'chinese') {
      this.foodName = ['Manchow Soup', 'Chop Suey', 'Hakka Noodles'];
    }
    else if (Foodtype.value == 'southIndian') {
      this.foodName = ['Masala Dosa', 'Pongal', 'idli sambhar'];
    }
  }
  onSubmit(formdata: any) {
    if (formdata.valid) {


      console.log(formdata.value);

      let data = [];
      data = JSON.parse(localStorage.getItem("restoran") || "[]");
      formdata.value.id=data.length+1;
      data.push(formdata.value);
      localStorage.setItem("restoran", JSON.stringify(data));
      alert("Restaurant Created")
      formdata.reset()
    }
  }


}
