import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, Subject } from 'rxjs';
import { constantUrl } from './constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public cartAddedSubject = new Subject<boolean>();

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<any[]>{
    // return this.httpClient.get<any[]>(constantUrl.API_END_POINT + constantUrl.METHODS.GETALLPRODUCTS);
    return this.httpClient.get<any>(constantUrl.API_END_POINT + constantUrl.METHODS.GETALLPRODUCTS).pipe(
      map((response: any) => {
        // Check if response contains 'data', if not, assume it's already an array
        return response.data ? response.data : response;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error("Cannot fetch products:", error);
        return of([]);  // Always return an empty array in case of error
      })
    );
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
