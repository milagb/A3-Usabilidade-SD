import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router, private toast: NgToastService) { }

  apiUrl = 'http://localhost:3000'

  //--------------------------USER-----------------------------------------------------------

  registerUser(user: any){
    this.http.post(this.apiUrl + '/user/register', user).subscribe(res => {
      this.toast.success({detail:"Success Message",summary:"User registered successfully", duration:5000})
    }, err =>{
      console.log(err);
      this.toast.error({detail:"Registration Failed",summary:"Email already exist!", duration:5000});
    })
  }

  getUserDetailById(id: string) {
    return this.http.get(this.apiUrl + '/user/getById' + '?Id=' + id);
  }

  loginUser(credentials: any){
    return this.http.post(this.apiUrl + '/users/login', credentials);
  }

  //----------------------------MEDICO---------------------------------------------------------

  getAllEmployee(){
    return this.http.get(this.apiUrl + '/medico/list');
  }

  saveEmployee(model: any) {
    return this.http.post(this.apiUrl + '/medico/register', model);
  }  

  updateEmployee(id: string, model: any) {
    return this.http.put(this.apiUrl + `/medicos/update` + `?id=${id}`, model);
  }  

  deleteEmployeeById(model: any) {
    return this.http.delete(this.apiUrl + `/medico/delete` + '?id=' + model);
  }

  getEmployeeDetailById(id: string) {
    return this.http.get(this.apiUrl + '/medicos/getById' + '?Id=' + id);
  }

  getEmployeeDetailByOccupation(occ: string) {
    return this.http.get(this.apiUrl + '/medicos/getByOcc' + '?occupation=' + occ);
  }

  //------------------------------PACIENTE-------------------------------------------------------

  getAllPaciente(){
    return this.http.get(this.apiUrl + '/paciente/list');
  }

  savePaciente(model: any) {
    return this.http.post(this.apiUrl + '/paciente/register', model);
  }  

  updatePaciente(id: string, model: any) {
    return this.http.put(this.apiUrl + '/paciente/update' + `?id=${id}`, model);
  } 
  
  deletePaciente(model: any) {
    return this.http.delete(this.apiUrl + `/paciente/delete` + '?id=' + model);
  }

  getPacienteDetailById(id: string) {
    return this.http.get(this.apiUrl + '/paciente/getById' + '?Id=' + id);
  }

 //-----------------------------------CONSULTA--------------------------------------------------

 getAllConsulta(){
    return this.http.get(this.apiUrl + '/consulta/list');
  }

  saveConsulta(model: any) {
    return this.http.post(this.apiUrl + '/consulta/register', model);
  }  

  updateConsulta(id: string, model: any) {
    return this.http.put(this.apiUrl + `/consulta/update` + `?id=${id}`, model);
  }  

  getConsultaDetailById(id: string) {
    return this.http.get(this.apiUrl + '/consulta/getById' + '?Id=' + id);
  }

  deleteConsulta(model: any) {
    return this.http.delete(this.apiUrl + `/consulta/delete` + '?id=' + model);
  }





  // registerMedicos(medico: any){
  //   this.http.post('http://localhost:3000/medico/register', medico).subscribe(res => {
  //     this.toast.success({detail:"Success Message",summary:"Medico registered successfully", duration:5000})
  //   }, err =>{
  //     console.log(err);
  //     this.toast.error({detail:"Registration Failed",summary:"Email already exist!", duration:5000});
  //   })
  // }

}
