import { Component } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject, Observable } from 'rxjs';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { DatePipe } from '@angular/common';
import { DateAdapter } from '@angular/material/core';
import { ApiService } from 'src/app/api.service';

interface Agenda {
  start: Date;
  title: string
}
@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.scss']
})
export class AgendamentosComponent {

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  dataSource: any;
  date: any;
  name = '';
  occupation = '';
  time = '';
  doctor = '';

  start: string = '';
  title : string = '';
  empList: Array<Agenda> = [];

  agendas: Agenda[] = [
    {start: new Date('Nov 17 2022 16:00'), title: 'Lucas Lindo: Clinico Geral - 16:00 - Doc. Mathias Bezerra'},
    {start: new Date('Nov 17 2022 10:00'), title: 'Teste 2'},
    {start: new Date('Nov 17 2022 13:00'), title: 'Teste 3'},
  ];

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = true;

  constructor(private apiService: ApiService, private datePipe: DatePipe, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); 
   }

  ngOnInit(): void {
    
    this.getData().subscribe((dates) => {
      console.log('kissi kissi', dates)
      this.empList = dates
      this.events = this.empList
    })
    
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  getData(): Observable<Agenda[]> {

    var subject = new Subject<Agenda[]>();

    this.apiService.getAllConsulta().subscribe((data: any) => {

      if (data != null) {
        var resultData = data.response;
        let start;

        for (let index = 0; index < resultData.length; index++) {
          this.date = resultData[index];
          this.date.data = this.datePipe.transform(this.date.data, "MMM d y " + this.date.horario);

          this.name = this.date.paciente
          this.occupation = this.date.occupation
          this.time = this.date.horario
          this.doctor = this.date.medico

          start = new Date(this.date.data)
          

          this.empList.push({
            start: start,
            title: this.name + ': ' + this.time + ' | ' + ' Dr. ' + this.doctor + ' - ' + this.occupation
          });

        }

        subject.next(this.empList);
      }
    },
      (error: any) => {
        if (error) {
          if (error.status == 404) {
            this.dataSource = [];
          }
        }
      });

    return subject.asObservable();
  }

}
