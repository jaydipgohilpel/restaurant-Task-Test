import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import {FormsModule} from '@angular/forms';
import { CreateyourorderComponent } from './customerhome/createyourorder/createyourorder.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MaterialExampleModule} from '../../material.module';
import { ViewYourOrderComponent } from './customerhome/view-your-order/view-your-order.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    CustomerhomeComponent,
    CreateyourorderComponent,
    ViewYourOrderComponent
  ],
  imports: [
    CommonModule,FormsModule,MatStepperModule,MaterialExampleModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule
  ]
})
export class CustomerModule { }
