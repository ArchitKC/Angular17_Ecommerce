import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<any[]>{
    return this.httpClient.get<any[]>("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts");

  }
}
