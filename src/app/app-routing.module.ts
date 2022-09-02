import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './admin/dashboard/dashboard.component'
import { CustomerhomeComponent } from './customer/customer-home/customer-home.component'
import { CreateRestaurantComponent } from './admin/dashboard/create-restaurant/create-restaurant.component'
import { OrderListComponent } from './admin/dashboard/order-list/order-list.component'
import { CreateyourorderComponent } from './customer/customer-home/create-your-order/create-your-order.component'
import { ViewYourOrderComponent } from './customer/customer-home/view-your-order/view-your-order.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: DashboardComponent },
  { path: 'customer', component: CustomerhomeComponent },
  { path: 'create-restaurant', component: CreateRestaurantComponent },
  { path: 'view-order-list', component: OrderListComponent },
  { path: 'create-order', component: CreateyourorderComponent },
  { path: 'view-your-list', component: ViewYourOrderComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
