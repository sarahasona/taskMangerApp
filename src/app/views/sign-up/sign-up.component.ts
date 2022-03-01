import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { IsignUp } from 'src/app/Interface/signUpInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  ivalidEmail:boolean = false
  ivalidAge:boolean = false
  msg:string = ''
  invalidPassword:boolean= false
  constructor(private auth:AuthService,private route:Router) { }
  HideEmailError(){
    this.ivalidEmail = false
  }
  hideAgeError(){
    this.ivalidAge = false
  }
  hidePasswordError(){
    this.invalidPassword = false
  }
  submitForm(data:IsignUp){
    this.auth.signUp(data).subscribe({
      next:(res:any)=>{
        console.log(res)
        localStorage.setItem("token",res.token)
        this.route.navigateByUrl('profile')

      },
      error:(httpError:any)=>{
        console.log(httpError)
        if(httpError.error.code){
          this.ivalidEmail = true
        }
        else if(httpError.error.errors.age){
          this.ivalidAge = true
          this.msg = httpError.error.errors.age.message
        }
        else if(httpError.error.errors.password){
          this.invalidPassword = true
          this.msg = httpError.error.errors.password.message
        }
      }
    })
  }
  ngOnInit(): void {
  }

}
