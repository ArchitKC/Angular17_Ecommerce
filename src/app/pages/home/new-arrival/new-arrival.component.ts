import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrl: './new-arrival.component.css'
})
export class NewArrivalComponent implements OnInit{

  private subscription : Subscription | undefined
  productLists:any[]=[];
  carObj: any={
    "CartId": 0,
    "CustId": 1,
    "ProductId": 0,
    "Quantity": 0,
    "AddedDate": "2024-09-23T16:30:11.571Z"
  }

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts(){
    // this.productService.getAllProducts().subscribe((result:any) =>{
    //   this.productLists = result.data;
    // });
    this.subscription = this.productService.getAllProducts().subscribe({
      next: (response) => {
        this.productLists = response || [];
      },
      error:(error)=>{
        console.error('Error occurred in Fetching Products:', error);
      }
    })
  }

  addItemToCart(productId:Number){
    this.carObj.ProductId = productId;
    this.productService.addToCart(this.carObj).subscribe((result:any) =>{
      if(result.result){
        this.productService.cartAddedSubject.next(true);
      }
    });
  }
}
