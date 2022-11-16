import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api.service";

export interface PeriodicElement {
  nome: string;
  crm: number;
  sobrenome: string;
  especialiidade: string;
  email: string;
  fone: string;
  sexo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {crm: 1, nome: 'Pamela', sobrenome: 'Martini', especialiidade: 'Pediatra', email: '@gmail.com', fone: '11 87892', sexo: 'F'},
  {crm: 2, nome: 'Lucas', sobrenome: 'Lindo', especialiidade: 'Neurologista', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {crm: 3, nome: 'Lilith', sobrenome: 'Silva', especialiidade: 'Clinico Geral', email: '@gmail.com', fone: '11 87892', sexo: 'F'},
  {crm: 4, nome: 'Berry', sobrenome: 'Alen', especialiidade: 'Oftalmologista', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {crm: 5, nome: 'Boron', sobrenome: 'Alves', especialiidade: 'Nefrologista', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {crm: 5, nome: 'Boron', sobrenome: 'Alves', especialiidade: 'Nefrologista', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {crm: 5, nome: 'Boron', sobrenome: 'Alves', especialiidade: 'Nefrologista', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {crm: 5, nome: 'Boron', sobrenome: 'Alves', especialiidade: 'Nefrologista', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {crm: 5, nome: 'Boron', sobrenome: 'Alves', especialiidade: 'Nefrologista', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {crm: 5, nome: 'Boron', sobrenome: 'Alves', especialiidade: 'Nefrologista', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
];

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {

  displayedColumns: string[] = ['crm', 'nome', 'sobrenome', 'especialiidade', 'email', 'fone', 'uf', 'ativo', 'actions'];
  dataSource: any = [];
  

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  async getAllEmployee() {
    this.apiService.getAllEmployee().subscribe((data : any) => {
      // const text = JSON.stringify(data);
      // console.log('1', text);
      // const myArr = JSON.parse(text);
      // console.log('2', myArr);
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
