import { Component, OnInit } from '@angular/core';

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

  displayedColumns: string[] = ['crm', 'nome', 'sobrenome', 'especialiidade', 'email', 'fone', 'sexo', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
