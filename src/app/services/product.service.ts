import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = "http://localhost:3000"; 
  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.httpClient.get(this.api+"/products");  
  }

  public getSingleProduct(id: number): Observable<any> {
    return this.httpClient.get(this.api+"/products/"+id);
  }

}
