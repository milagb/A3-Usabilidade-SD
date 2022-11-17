import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "src/app/api.service";
import { NgToastService } from 'ng-angular-popup';
import { NgForm } from '@angular/forms';

interface Agenda {
  value: string;
  viewValue: string;
}

interface Medico {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-consultas',
  templateUrl: './add-consultas.component.html',
  styleUrls: ['./add-consultas.component.scss']
})
export class AddConsultasComponent implements OnInit {

  isSubmitted: boolean = false;
  result: any;

  editConsultaForm: consultaForm = new consultaForm();

  @ViewChild("consultaForm")
  consultaForm!: NgForm;

  agendas: Agenda[] = [
    {value: 'Agenda-1', viewValue: 'Agenda-1'},
    {value: 'Agenda-2', viewValue: 'Agenda-2'},
    {value: 'Agenda-3', viewValue: 'Agenda-3'},
  ];

  medicos: Array<Medico> = [];

  constructor(private apiService: ApiService, private router: Router, private toast: NgToastService) { }

  ngOnInit() {
  }

  AddConsulta(consulta: any) {
    this.isSubmitted = true;
    if (consulta) {
      this.apiService.saveConsulta(consulta).subscribe(async data => {
        this.result = data
        console.log(this.result)
        if (data != null) {
          if (this.result.status == 200) {
            this.toast.success({ detail: "Success Message", summary: 'Consulta registered successfully', duration: 5000 })
            setTimeout(() => {
              this.router.navigate(['/consultas']);
            }, 800);
          }
        }
      },
        async error => {
          this.toast.error({detail:"Error Message",summary: "Failed to add consulta", duration:5000})
          setTimeout(() => {
            //this.router.navigate(['/consulta']);
          }, 500);
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

  onBookChange(){
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
