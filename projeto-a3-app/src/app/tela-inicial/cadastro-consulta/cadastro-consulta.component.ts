import { Component, OnInit } from '@angular/core';

interface Agenda {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cadastro-consulta',
  templateUrl: './cadastro-consulta.component.html',
  styleUrls: ['./cadastro-consulta.component.scss']
})
export class CadastroConsultaComponent implements OnInit {

  agendas: Agenda[] = [
    {value: 'agenda-1', viewValue: 'Agenda-1'},
    {value: 'agenda-2', viewValue: 'Agenda-2'},
    {value: 'agenda-3', viewValue: 'Agenda-3'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
