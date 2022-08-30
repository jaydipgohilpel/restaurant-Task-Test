import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {AdminModule} from './admin/admin.module';
import {CustomerModule} from './customer/customer.module';
import {FormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialExampleModule} from './../material.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    CustomerModule,
    FormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MaterialExampleModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
