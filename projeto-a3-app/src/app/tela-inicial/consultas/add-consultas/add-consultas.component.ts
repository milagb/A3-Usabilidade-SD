import { Component, OnInit } from '@angular/core';

interface Agenda {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-consultas',
  templateUrl: './add-consultas.component.html',
  styleUrls: ['./add-consultas.component.scss']
})
export class AddConsultasComponent implements OnInit {

  agendas: Agenda[] = [
    {value: 'agenda-1', viewValue: 'Agenda-1'},
    {value: 'agenda-2', viewValue: 'Agenda-2'},
    {value: 'agenda-3', viewValue: 'Agenda-3'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
