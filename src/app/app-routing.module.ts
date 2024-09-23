import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SaleComponent } from './pages/sale/sale.component';
import { CartComponent } from './pages/cart/cart.component';
import { NewArrivalComponent } from './pages/home/new-arrival/new-arrival.component';
import { BestSellerComponent } from './pages/home/best-seller/best-seller.component';
import { SpecialOfferComponent } from './pages/home/special-offer/special-offer.component';
import { FeaturedComponent } from './pages/home/featured/featured.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent, // Main page component
    children: [
      { path: 'arrival', component: NewArrivalComponent },
      { path: 'sellers', component: BestSellerComponent },
      { path: 'featured', component: FeaturedComponent },
      { path: 'offer', component: SpecialOfferComponent },
      { path: '', redirectTo: 'arrival', pathMatch: 'full' }, // Default child route
    ],
  },
  {path: 'sale', component:SaleComponent},
  {path: 'cart', component:CartComponent},   
  {path: '**', component:HomeComponent},
  {path:'home/arrivals', component:NewArrivalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
