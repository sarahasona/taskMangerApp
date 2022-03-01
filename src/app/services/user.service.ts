import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:3000/'
  getProfile(){
    return this.http.get(this.url + 'profile')
  }
}
