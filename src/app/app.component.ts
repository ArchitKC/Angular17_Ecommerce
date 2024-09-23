import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Angular17_Ecommerce';
  cartProducts: any[]=[];
  subTotal: number =0;
  constructor(private productService : ProductService, private router:Router){
    this.productService.cartAddedSubject.subscribe(res=>{
      this.loadCart();
    })
  }

  ngOnInit():void{
    this.loadCart();
  }

  loadCart(){
    this.subTotal = 0;
    this.productService.getCartCountByCustomerId(1).subscribe((res:any)=>{
      this.cartProducts = res.data;
      this.cartProducts.forEach(item =>{
        this.subTotal += item.productPrice;
      })
    });
  }

  redirectToSale(){
    this.router.navigate(["sale"]);
  }

}
