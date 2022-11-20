import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-view-pacientes',
  templateUrl: './view-pacientes.component.html',
  styleUrls: ['./view-pacientes.component.scss']
})
export class ViewPacientesComponent implements OnInit {

  pacienteId: any;
  pacienteDetail : any= [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); 
   }

  ngOnInit(): void {
    this.pacienteId = this.route.snapshot.params['pacienteId'];      
    this.getPacienteDetailById();
  }

  getPacienteDetailById() {       
    this.apiService.getPacienteDetailById(this.pacienteId).subscribe((data : any) => {      
      data = data.response
      console.log('data', data);
      if (data != null) {
        var resultData = data;
        if (resultData) {
          for (let index = 0; index < resultData.length; index++) {
            const element = resultData[index];
            this.pacienteDetail.firstname = element.firstname;
            this.pacienteDetail.lastname = element.lastname;
            this.pacienteDetail.email = element.email;
            this.pacienteDetail.sexo = element.sexo;
            this.pacienteDetail.nascimento = element.nascimento;
            this.pacienteDetail.celular = element.celular;
            this.pacienteDetail.telefone = element.telefone;
            this.pacienteDetail.cpf = element.cpf;
            this.pacienteDetail.endereco = element.endereco;
            this.pacienteDetail.ativo = element.ativo;
          }
        }
      }
    },
    (error :any)=> { }); 
  }

}
