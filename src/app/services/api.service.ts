import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url="https://fakestoreapi.com/products"

  constructor(private http:HttpClient) {} 

    student(){
      return this.http.get(this.url)
   
  }
}
