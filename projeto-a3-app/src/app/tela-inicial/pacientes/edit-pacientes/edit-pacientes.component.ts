import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup'
import { ApiService } from "src/app/api.service";
import { DateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-edit-pacientes',
  templateUrl: './edit-pacientes.component.html',
  styleUrls: ['./edit-pacientes.component.scss']
})
export class EditPacientesComponent implements OnInit {

  editPacienteForm: pacienteForm = new pacienteForm();

  @ViewChild("pacienteForm")
  pacienteForm!: NgForm;

  isSubmitted: boolean = false;
  pacienteId: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private dateAdapter: DateAdapter<Date>, 
    private router: Router, private toast: NgToastService) {
      this.dateAdapter.setLocale('en-GB'); 
     }

  ngOnInit(): void {
    this.pacienteId = this.route.snapshot.params['pacienteId'];
    this.getPacienteDetailById();
  }

  getPacienteDetailById() {
    this.apiService.getPacienteDetailById(this.pacienteId).subscribe((data: any) => {
      console.log(data);
      if (data != null) {
        var resultData = data;
        console.log('resultData: ', resultData)
        if (resultData) {
          //this.employeeForm.Id = resultData.id;
          this.editPacienteForm.firstname = resultData.firstname;
          this.editPacienteForm.lastname = resultData.lastname;
          this.editPacienteForm.email = resultData.email;
          this.editPacienteForm.sexo = resultData.sexo;
          this.editPacienteForm.nascimento = resultData.nascimento;
          this.editPacienteForm.celular = resultData.celular;
          this.editPacienteForm.telefone = resultData.telefone;
          this.editPacienteForm.cpf = resultData.cpf;
          this.editPacienteForm.endereco = resultData.endereco;
          this.editPacienteForm.email = resultData.email;
          this.editPacienteForm.ativo = resultData.ativo;
        }
      }
    },
      (error: any) => { });
  }

  EditPaciente(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.apiService.updatePaciente(this.pacienteId, this.editPacienteForm).subscribe(async data => {
        if (data != null) {
          var resultData = data;
          if (resultData != null) {
            if (resultData != null) {
              this.toast.success({detail:"Success Message",summary: 'Paciente updated successfully', duration:5000})
              setTimeout(() => {
                this.router.navigate(['/pacientes']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toast.error({detail:"Error Message",summary: error, duration:5000})
          setTimeout(() => {
            this.router.navigate(['/pacientes']);
          }, 5000);
        });
    }
  }

}

export class pacienteForm {
  Id: number = 0;
  firstname: string = "";
  lastname: string = "";
  sexo: string = "";
  nascimento: string = "";
  celular: string = "";
  telefone: string = "";
  cpf: string = "";
  endereco: string = "";
  email: string = "";
  ativo: boolean = false;
}

