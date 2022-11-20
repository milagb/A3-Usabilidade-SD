import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router, private toast: NgToastService) { }

  apiLocal = 'http://localhost:3000'
  apiUrl = 'https://teste-usuabilidade-7qy2kubfgq-uc.a.run.app'

  token = 'Bearer ' + sessionStorage.getItem('token');

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.token });
    
  options = { headers: this.headers };

  //--------------------------USER-----------------------------------------------------------

  registerUser(user: any){
    return this.http.post(this.apiUrl + '/user/register', user, this.options);
  }

  loginUser(credentials: any){
    return this.http.post(this.apiUrl + '/user/login', credentials);
  }

  //----------------------------MEDICO---------------------------------------------------------

  getAllEmployee(){
    return this.http.post(this.apiUrl + '/medico/list', {}, this.options);
  }

  saveEmployee(model: any) {
    return this.http.post(this.apiUrl + '/medico/add', model, this.options);
  }  

  updateEmployee(id: string, model: any) {
    model.medicoID = id
    return this.http.put(this.apiUrl + `/medico/update`, model, this.options);
  }  

  deleteEmployeeById(model: any) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
      }),
      body: {
        medicoID: model
      },
    };
    return this.http.delete(this.apiUrl + `/medico/delete`, options);
  }

  getEmployeeDetailById(id: string) {
    return this.http.post(this.apiUrl + '/medico/list', {_id: id}, this.options);
  }

  getEmployeeDetailByOccupation(occ: string) {
    return this.http.post(this.apiUrl + '/medico/list', {occupation: occ}, this.options);
  }

  //------------------------------PACIENTE-------------------------------------------------------

  getAllPaciente(){
    return this.http.post(this.apiUrl + '/paciente/list', {}, this.options);
  }

  savePaciente(model: any) {
    return this.http.post(this.apiUrl + '/paciente/add', model, this.options);
  }  

  updatePaciente(id: string, model: any) {
    model.pacienteID = id
    return this.http.put(this.apiUrl + '/paciente/update', model, this.options);
  } 
  
  deletePaciente(model: any) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
      }),
      body: {
        pacienteID: model
      },
    };
    return this.http.delete(this.apiUrl + `/paciente/delete`, options);
  }

  getPacienteDetailById(id: string) {
    return this.http.post(this.apiUrl + '/paciente/list', {id: id}, this.options);
  }

 //-----------------------------------CONSULTA--------------------------------------------------

 getAllConsulta(){
    return this.http.post('https://teste-usuabilidade-7qy2kubfgq-uc.a.run.app/consulta/list', {}, this.options);
  }

  saveConsulta(model: any) {
    return this.http.post(this.apiUrl + '/consulta/add', model, this.options);
  }  

  updateConsulta(id: string, model: any) {
    model.consultaID = id
    return this.http.put(this.apiUrl + `/consulta/update`, model, this.options);
  }  

  getConsultaDetailById(id: string) {
    return this.http.post(this.apiUrl + '/consulta/list', {_id: id}, this.options);
  }

  deleteConsulta(model: any) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
      }),
      body: {
        consultaID: model
      },
    };
    return this.http.delete(this.apiUrl + `/consulta/delete`, options);
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
