import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "./user.model";
import { Medico } from "./medico.model";
import { NgToastService } from 'ng-angular-popup'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private users: User[] = []
  private medicos: Medico[] = []

  constructor(private http: HttpClient, private router: Router, private toast: NgToastService) { }

  registerUser(user: any){
    this.http.post('http://localhost:3000/register', user).subscribe(res => {
      this.toast.success({detail:"Success Message",summary:"User registered successfully", duration:5000})
    }, err =>{
      console.log(err);
      this.toast.error({detail:"Registration Failed",summary:"Email already exist!", duration:5000});
    })
  }

  registerMedicos(medico: any){
    this.http.post('http://localhost:3000/register', medico).subscribe(res => {
      this.toast.success({detail:"Success Message",summary:"Medico registered successfully", duration:5000})
    }, err =>{
      console.log(err);
      this.toast.error({detail:"Registration Failed",summary:"Email already exist!", duration:5000});
    })
  }

  loginUser(credentials: any){
    this.http.post('http://localhost:3000/users/login', credentials).subscribe(res => {
      //this.toast.success({detail:"Success Message",summary:"Login is Success", duration:5000})
      this.router.navigate(['tela-inicial']);
    }, err =>{
      console.log(err);
      this.toast.error({detail:"Login Failed",summary:"Incorrect email or password", duration:5000});
    })
  }

}
