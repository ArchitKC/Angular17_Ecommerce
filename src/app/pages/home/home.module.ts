import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { FeaturedComponent } from './featured/featured.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    NewArrivalComponent,
    BestSellerComponent,
    FeaturedComponent,
    SpecialOfferComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
