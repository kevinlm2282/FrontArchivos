import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  postProduct(productNew: FormData): Observable<FormData>{
    return this.http.post<FormData>(`${environment.API_URL}/products`, productNew);
  }
  // postImage(image: any): Observable<any>{
  //   return this.http.post<any>(`${environment.API_URL}/media/upload`, image);
  // }


}
