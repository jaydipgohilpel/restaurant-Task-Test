import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './admin/dashboard/dashboard.component'
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component'
import { CreateRestaurantComponent } from './admin/dashboard/create-restaurant/create-restaurant.component'
import { OrderListComponent } from './admin/dashboard/order-list/order-list.component'
import {CreateyourorderComponent} from './customer/customerhome/createyourorder/createyourorder.component'
import {ViewYourOrderComponent} from './customer/customerhome/view-your-order/view-your-order.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admindashboard', component: DashboardComponent },
  { path: 'customer', component: CustomerhomeComponent },
  { path:'Create-restaurant',component:CreateRestaurantComponent},
  {path:'View-order-list',component:OrderListComponent},
  {path:'Create-order',component:CreateyourorderComponent},
  {path:'View-Your-List',component:ViewYourOrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
