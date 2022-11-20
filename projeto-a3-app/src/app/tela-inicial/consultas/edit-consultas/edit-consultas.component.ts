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
      console.log('data',data.response);
      if (data != null) {
        var resultData = data.response;
        for (let index = 0; index < resultData.length; index++) {
          const element = resultData[index];
          if (resultData) {
            console.log('data',element.medico);
            //this.employeeForm.Id = resultData.id;
            this.editConsultaForm.agenda = element.agenda;
            this.editConsultaForm.occupation = element.occupation;
            this.editConsultaForm.medico = element.medico;
            this.editConsultaForm.data = element.data;
            this.editConsultaForm.horario = element.horario;
            this.editConsultaForm.paciente = element.paciente;
            this.editConsultaForm.celular = element.celular;
            this.editConsultaForm.telefone = element.telefone;
            this.editConsultaForm.cpf = element.cpf;
            this.editConsultaForm.observacoes = element.observacoes;
            this.editConsultaForm.retorno = element.retorno;
          }
        }
        this.getEmployeeDetailByOccupation(this.editConsultaForm.occupation);
      }
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

      data = data.response

      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let nome = element.firstname + ' ' + element.lastname
        console.log('nome', nome);
        this.medicos.push({
          value: nome,
          viewValue: nome
        });
      }
    },
    (error :any)=> { }); 
  }

  occupationChange(){
    console.log('popopo',this.editConsultaForm.occupation);
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

