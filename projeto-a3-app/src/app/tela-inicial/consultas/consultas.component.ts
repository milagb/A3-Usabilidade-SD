import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api.service";
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {

  displayedColumns: string[] = ['agenda', 'especialidade', 'medico', 'data', 'horario', 'paciente', 'cpf', 'retorno', 'actions'];
  dataSource = [];
  result: any;

  constructor(private apiService: ApiService, private dateAdapter: DateAdapter<Date>, private datePipe: DatePipe) {
    this.dateAdapter.setLocale('en-GB'); 
   }

  ngOnInit(): void {
    this.getAllConsulta();
  }

  async getAllConsulta() {
    this.apiService.getAllConsulta().subscribe((data : any) => {

      if (data != null) {
        var resultData = data;
        if (resultData) {
          this.dataSource = resultData;
          console.log('3', this.dataSource);

          for (let index = 0; index < this.dataSource.length; index++) {
            this.result = this.dataSource[index];
            this.result.data = this.datePipe.transform(this.result.data,"dd/MM/yyyy");
          }

          console.log(this.result)
          
        }
      }
    },
    (error : any)=> {
        if (error) {
          if (error.status == 404) {
            if(error.error && error.error.message){
              this.dataSource = [];
            }
          }
        }
      });
  }

}
