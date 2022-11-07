import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nome: string;
  cpf: number;
  sobrenome: string;
  endereco: string;
  email: string;
  fone: string;
  sexo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {cpf: 1, nome: 'Pamela', sobrenome: 'Martini', endereco: 'Rua X', email: '@gmail.com', fone: '11 87892', sexo: 'F'},
  {cpf: 2, nome: 'Lucas', sobrenome: 'Lindo', endereco: 'Avenida Y', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {cpf: 3, nome: 'Lilith', sobrenome: 'Silva', endereco: 'Rua Geral', email: '@gmail.com', fone: '11 87892', sexo: 'F'},
  {cpf: 4, nome: 'Berry', sobrenome: 'Alen', endereco: 'Avenida Brasil', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {cpf: 5, nome: 'Boron', sobrenome: 'Alves', endereco: 'Rua Parana', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {cpf: 5, nome: 'Boron', sobrenome: 'Alves', endereco: 'Rua Parana', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {cpf: 5, nome: 'Boron', sobrenome: 'Alves', endereco: 'Rua Parana', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {cpf: 5, nome: 'Boron', sobrenome: 'Alves', endereco: 'Rua Parana', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {cpf: 5, nome: 'Boron', sobrenome: 'Alves', endereco: 'Rua Parana', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {cpf: 5, nome: 'Boron', sobrenome: 'Alves', endereco: 'Rua Parana', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {cpf: 5, nome: 'Boron', sobrenome: 'Alves', endereco: 'Rua Parana', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {cpf: 5, nome: 'Boron', sobrenome: 'Alves', endereco: 'Rua Parana', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {cpf: 5, nome: 'Boron', sobrenome: 'Alves', endereco: 'Rua Parana', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
  {cpf: 5, nome: 'Boron', sobrenome: 'Alves', endereco: 'Rua Parana', email: '@gmail.com', fone: '11 87892', sexo: 'M'},
];

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  displayedColumns: string[] = ['cpf', 'nome', 'sobrenome', 'endereco', 'email', 'fone', 'sexo', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
