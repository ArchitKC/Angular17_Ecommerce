import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { constantUrl } from './constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public cartAddedSubject = new Subject<boolean>();

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<any[]>{
    return this.httpClient.get<any[]>(constantUrl.API_END_POINT + constantUrl.METHODS.GETALLPRODUCTS);
  }

  addToCart(inputData: any): Observable<any>{
    return this.httpClient.post<any>(constantUrl.API_END_POINT + constantUrl.METHODS.ADDTOCART, inputData)
  }

  getCartCountByCustomerId(customerId:number):Observable<any[]>{
    return this.httpClient.get<any[]>(constantUrl.API_END_POINT + constantUrl.METHODS.GETCARTPRODUCTSBYCUSTOMERID +customerId)
  }

  removeCartProductById(cartProductID: number):Observable<any[]>{
    return this.httpClient.get<any[]>( constantUrl.API_END_POINT + constantUrl.METHODS.DELETEPRODUCTFROMCARTBYID +cartProductID);
  }
}
