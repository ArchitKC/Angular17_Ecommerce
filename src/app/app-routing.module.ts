import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SaleComponent } from './pages/sale/sale.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {path: 'products', component:HomeComponent},
  {path: 'sale', component:SaleComponent},
  {path: 'cart', component:CartComponent},
  {path: '**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
