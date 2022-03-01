import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { IsignUp } from 'src/app/Interface/signUpInterface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // userName:string=""
  user:IsignUp ={}
  constructor(private userService:UserService) { }
  getUserProfile(){
    this.userService.getProfile().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.user = res.user
      },
      error:(httpError:any)=>{
        console.log(httpError)
      }
    })
  }
  ngOnInit(): void {
    this.getUserProfile()
  }

}
