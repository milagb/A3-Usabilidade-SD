import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup'
import { ApiService } from "src/app/api.service";
import { DateAdapter } from '@angular/material/core';

interface Agenda {
  value: string;
  viewValue: string;
}

interface Medico {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-consultas',
  templateUrl: './edit-consultas.component.html',
  styleUrls: ['./edit-consultas.component.scss']
})
export class EditConsultasComponent implements OnInit {

  editConsultaForm: consultaForm = new consultaForm();

  @ViewChild("consultaForm")
  consultaForm!: NgForm;

  isSubmitted: boolean = false;
  consultaId: any;

  medicos: Array<Medico> = [];

  agendas: Agenda[] = [
    {value: 'Agenda-1', viewValue: 'Agenda-1'},
    {value: 'Agenda-2', viewValue: 'Agenda-2'},
    {value: 'Agenda-3', viewValue: 'Agenda-3'},
  ];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private dateAdapter: DateAdapter<Date>, 
    private router: Router, private toast: NgToastService) { 
    this.dateAdapter.setLocale('en-GB'); 
  }

  ngOnInit(): void {
    this.consultaId = this.route.snapshot.params['consultaId'];
    this.getConsultaDetailById();
  }

  getConsultaDetailById() {
    this.apiService.getConsultaDetailById(this.consultaId).subscribe((data: any) => {
      console.log(data);
      if (data != null) {
        var resultData = data;
        console.log('resultData: ', resultData.uf)
        if (resultData) {
          //this.employeeForm.Id = resultData.id;
          this.editConsultaForm.agenda = resultData.agenda;
          this.editConsultaForm.occupation = resultData.occupation;
          this.editConsultaForm.medico = resultData.medico;
          this.editConsultaForm.data = resultData.data;
          this.editConsultaForm.horario = resultData.horario;
          this.editConsultaForm.paciente = resultData.paciente;
          this.editConsultaForm.celular = resultData.celular;
          this.editConsultaForm.telefone = resultData.telefone;
          this.editConsultaForm.cpf = resultData.cpf;
          this.editConsultaForm.observacoes = resultData.observacoes;
          this.editConsultaForm.retorno = resultData.retorno;
        }
      }

      this.getEmployeeDetailByOccupation(this.editConsultaForm.occupation);
    },
      (error: any) => { });
  }

  EditConsulta(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.apiService.updateConsulta(this.consultaId, this.editConsultaForm).subscribe(async data => {
        if (data != null) {
          var resultData = data;
          if (resultData != null) {
            if (resultData != null) {
              this.toast.success({detail:"Success Message",summary: 'Consulta updated successfully', duration:5000})
              setTimeout(() => {
                this.router.navigate(['/consultas']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toast.error({detail:"Error Message",summary: error, duration:5000})
          setTimeout(() => {
            //this.router.navigate(['/consultas']);
          }, 5000);
        });
    }
  }

  getEmployeeDetailByOccupation(occ: any) {       
    this.apiService.getEmployeeDetailByOccupation(occ).subscribe((data : any) => {    
      this.medicos = []  

      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let nome = element.firstname + ' ' + element.lastname

        this.medicos.push({
          value: nome,
          viewValue: nome
        });
      }
    },
    (error :any)=> { }); 
  }

  occupationChange(){
    this.getEmployeeDetailByOccupation(this.editConsultaForm.occupation)
  }

}

export class consultaForm {
  Id: number = 0;
  agenda: string = "";
  occupation: string = "";
  medico: string = "";
  data: string = "";
  horario: string = "";
  paciente: string = "";
  celular: string = "";
  telefone: string = "";
  cpf: string = "";
  observacoes: string = "";
  retorno: boolean = false;
}

