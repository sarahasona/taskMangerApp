import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }
  signUp(credintals:any){
    return this.http.post(this.url + 'users',credintals)
  }
  login(credintals:any){
    return this.http.post(this.url + 'login' ,credintals)
  }
}
