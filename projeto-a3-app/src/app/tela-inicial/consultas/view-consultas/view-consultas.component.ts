import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-view-consultas',
  templateUrl: './view-consultas.component.html',
  styleUrls: ['./view-consultas.component.scss']
})
export class ViewConsultasComponent implements OnInit {

  consultaId: any;
  consultaDetail : any= [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); 
   }

  ngOnInit(): void {
    this.consultaId = this.route.snapshot.params['consultaId'];      
    this.getConsultaDetailById();
  }

  getConsultaDetailById() {       
    this.apiService.getConsultaDetailById(this.consultaId).subscribe((data : any) => {      
      console.log('data', data);
      data = data.response
      if (data != null) {
        var resultData = data;
        if (resultData) {
          for (let index = 0; index < resultData.length; index++) {
            const element = resultData[index];
            this.consultaDetail.agenda = element.agenda;
            this.consultaDetail.medico = element.medico;
            this.consultaDetail.data = element.data;
            this.consultaDetail.occupation = element.occupation;
            this.consultaDetail.horario = element.horario;
            this.consultaDetail.celular = element.celular;
            this.consultaDetail.paciente = element.paciente;
            this.consultaDetail.telefone = element.telefone;
            this.consultaDetail.cpf = element.cpf;
            this.consultaDetail.observacoes = element.observacoes;
            this.consultaDetail.retorno = element.retorno;
          }
        }
      }
    },
    (error :any)=> { }); 
  }

}
