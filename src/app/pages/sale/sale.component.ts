import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent implements OnInit {

  cartProductItems: any[] = [];
  subTotal: number = 0;

  ngOnInit(): void {
    this.loadCartItems();
  }

  constructor(private productService: ProductService) {
    this.loadCartItems();
   }

  loadCartItems() {
    this.subTotal = 0;
    this.productService.getCartCountByCustomerId(1).subscribe((res: any) => {
      this.cartProductItems = res.data;
      this.cartProductItems.forEach(item => {
        this.subTotal += item.productPrice;
      })
    });
  }

  removeItem(productid:number){
    this.productService.removeCartProductById(productid).subscribe((res:any)=>{
      this.loadCartItems();
      this.productService.cartAddedSubject.next(true);
      alert(res.message);
    })
  }
}
