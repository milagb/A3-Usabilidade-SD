import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup'
import { ApiService } from "src/app/api.service";
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-edit-medicos',
  templateUrl: './edit-medicos.component.html',
  styleUrls: ['./edit-medicos.component.scss']
})
export class EditMedicosComponent implements OnInit {

  editEmployeeForm: employeeForm = new employeeForm();

  @ViewChild("employeeForm")
  employeeForm!: NgForm;

  isSubmitted: boolean = false;
  Id: any;
  

  constructor(private route: ActivatedRoute, private apiService: ApiService, private dateAdapter: DateAdapter<Date>, 
    private router: Router, private toast: NgToastService) { 
    this.dateAdapter.setLocale('en-GB'); 
  }

  ngOnInit(): void {
    this.Id = this.route.snapshot.params['Id'];
    this.getEmployeeDetailById();
  }

  

  getEmployeeDetailById() {
    this.apiService.getEmployeeDetailById(this.Id).subscribe((data: any) => {
      console.log(data);
      if (data != null) {
        var resultData = data.response;
        console.log('resultData: ', resultData)
        for (let index = 0; index < resultData.length; index++) {
          const element = resultData[index];
          if (resultData) {
            //this.employeeForm.Id = resultData.id;
            this.editEmployeeForm.firstname = element.firstname;
            this.editEmployeeForm.lastname = element.lastname;
            this.editEmployeeForm.email = element.email;
            this.editEmployeeForm.occupation = element.occupation;
            this.editEmployeeForm.nascimento = element.nascimento;
            this.editEmployeeForm.celular = element.celular;
            this.editEmployeeForm.telefone = element.telefone;
            this.editEmployeeForm.crm = element.crm;
            this.editEmployeeForm.uf = element.uf;
            this.editEmployeeForm.email = element.email;
            this.editEmployeeForm.ativo = element.ativo;
          }
          
        }
      }
    },
      (error: any) => { });
  }

  EditEmployee(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.apiService.updateEmployee(this.Id, this.editEmployeeForm).subscribe(async data => {
        if (data != null) {
          var resultData = data;
          if (resultData != null) {
            if (resultData != null) {
              this.toast.success({detail:"Success Message",summary: 'Medico updated successfully', duration:5000})
              setTimeout(() => {
                this.router.navigate(['/medicos']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toast.error({detail:"Error Message",summary: error, duration:5000})
          setTimeout(() => {
            this.router.navigate(['/medicos']);
          }, 5000);
        });
    }
  }

}

export class employeeForm {
  Id: number = 0;
  firstname: string = "";
  lastname: string = "";
  occupation: string = "";
  nascimento: string = "";
  celular: string = "";
  telefone: string = "";
  crm: string = "";
  uf: string = "";
  email: string = "";
  ativo: boolean = false;
}
