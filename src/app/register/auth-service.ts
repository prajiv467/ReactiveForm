import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


export class AuthService {

    private readonly baseUrl = 'http://localhost:5000/api/v1';
  
    // Adds CORS header to the request?
    private httpOptions = { headers: new HttpHeaders({ 'Content-Type':'application/json','Access-Control-Allow-Origins':'*'})};
  
    constructor(
      private http: HttpClient
    ) { }
  
    login(email: string, password: string): Observable<any> {
      let postData = new FormData();
      postData.append('email', email);
      postData.append('password', password);
  
      return this.http.post<any>(`${this.baseUrl}/user/login`, postData, this.httpOptions);
    }
  }