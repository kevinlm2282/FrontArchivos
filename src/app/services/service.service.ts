import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { ProductGet } from '../models/productGet';
import { ProductResponse } from '../models/productResponse';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  postProduct(productNew: FormData): Observable<FormData>{
    return this.http.post<FormData>(`${environment.API_URL}/products`, productNew);
  }
  getProduct(){
    return this.http.get<Array<ProductGet>>(`${environment.API_URL}/products`);
  }

  getImage(image:any){
    return this.http.get<any>(`${environment.API_URL}/media/${image}`)
  }

  getProductPagination(pageNo:number, pageSize:number, sortBy:String, sortDir:String){
    return this.http.get<ProductResponse>(`${environment.API_URL}/pag/products`+ `?pageSize=${pageSize}&pageNo=${pageNo}&sortBy=${sortBy}&sortDir=${sortDir}`)
  }


}
