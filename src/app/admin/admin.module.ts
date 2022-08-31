import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderListComponent } from './dashboard/order-list/order-list.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MaterialExampleModule } from '../../material.module';
import { CreateRestaurantComponent } from './dashboard/create-restaurant/create-restaurant.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DashboardComponent,
    OrderListComponent,
    CreateRestaurantComponent
  ],
  imports: [
    CommonModule, MatStepperModule, MaterialExampleModule, FormsModule

  ]
})
export class AdminModule { }
