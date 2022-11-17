import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api.service";

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  displayedColumns: string[] = ['cpf', 'nome', 'sobrenome', 'endereco', 'email', 'fone', 'sexo', 'actions'];
  dataSource: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllPaciente()
  }

  async getAllPaciente() {
    this.apiService.getAllPaciente().subscribe((data : any) => {

      if (data != null) {
        var resultData = data;
        if (resultData) {
          this.dataSource = resultData;
          console.log('3', this.dataSource);
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
