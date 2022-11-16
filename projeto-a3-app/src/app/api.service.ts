import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router, private toast: NgToastService) { }

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  
  requestOptions = {                                                                                                                                                                                 
    headers: new Headers(this.headerDict), 
  };

  //http://localhost:3000

  registerUser(user: any){
    this.http.post('http://localhost:3000/user/register', user).subscribe(res => {
      this.toast.success({detail:"Success Message",summary:"User registered successfully", duration:5000})
    }, err =>{
      console.log(err);
      this.toast.error({detail:"Registration Failed",summary:"Email already exist!", duration:5000});
    })
  }

  // registerMedicos(medico: any){
  //   this.http.post('http://localhost:3000/medico/register', medico).subscribe(res => {
  //     this.toast.success({detail:"Success Message",summary:"Medico registered successfully", duration:5000})
  //   }, err =>{
  //     console.log(err);
  //     this.toast.error({detail:"Registration Failed",summary:"Email already exist!", duration:5000});
  //   })
  // }

  loginUser(credentials: any){
    return this.http.post('http://localhost:3000/users/login', credentials);
  }

  getAllEmployee(){
    return this.http.get('http://localhost:3000/medico/list');
  }

  saveEmployee(model: any) {
    return this.http.post('http://localhost:3000/medico/register', model);
  }  

  updateEmployee(id: string, model: any) {
    return this.http.put(`http://localhost:3000/medicos/update` + `?id=${id}`, model);
  }  

  getEmployeeDetailById(id: string) {
    return this.http.get('http://localhost:3000/medicos/getById' + '?Id=' + id);
  }

  getUserDetailById(id: string) {
    return this.http.get('http://localhost:3000/user/getById' + '?Id=' + id);
  }

}
