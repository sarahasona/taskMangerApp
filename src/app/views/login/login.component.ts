import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Ilogin } from 'src/app/Interface/loginInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private auth:AuthService,private route:Router) { }
  invalidLogin:boolean=false
  msg:string=''
  deleteError(){
    this.invalidLogin = false
    this.msg =''
  }
  submitForm(data:Ilogin){
    this.auth.login(data).subscribe({
      next:(res:any)=>{
        console.log(res)
        localStorage.setItem("token",res.token)
        this.route.navigateByUrl('profile')
      },
      error:(httpError:any)=>{
        this.invalidLogin = true
        console.log(httpError)
        this.msg = 'Unable to login check email and password'
      }
    })
  }
  ngOnInit(): void {
  }

}
