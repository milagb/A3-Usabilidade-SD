import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService } from 'src/app/api.service';
import { formatDate } from '@angular/common';
import { Observable, Subject } from 'rxjs';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  medicos = 0;
  result: any[] = [];
  nome: string = '';
  empoloyeeID: number = 0;
  empList: Array<{ nome: string, empoloyeeID: number }> = [];

  dataSource: any;
  date: any;
  value: any;

  pacientes = 0
  consultas = 0
  retornos = 0
  hoje = 0

  constructor(private apiService: ApiService, private datePipe: DatePipe) { }

  ngOnInit() {

    this.getData().subscribe((dates) => {

      const d = this.datePipe.transform(new Date(), "dd/MM/yyyy")


      for (let index = 0; index < dates.length; index++) {
        const element = new Date(dates[index]);

        //console.log(this.monthNames[element.getMonth()])
        this.nome = dates[index];
        this.empoloyeeID = 1;
        this.empList.push({ nome: this.nome, empoloyeeID: this.empoloyeeID });
        this.consultas++;

        if (this.nome == d) {
          this.hoje++
        }
      }

      const map = this.empList.reduce((map, current) => {
        const month = this.getMonth(current.nome);
        const key = month.toISOString();
        if (!map.has(key)) {
          map.set(key, 0);
        }

        map.set(key, map.get(key)! + current.empoloyeeID);

        return map;
      }, new Map<string, number>());

      const months = Array.from(map.keys())
        .sort((a, b) => a.localeCompare(b));
      this.result = months.map(x => ({
        month: formatDate(x, 'MMM', 'en-US'),
        value: map.get(x)
      }));

      this.loadChart();
    })

    this.getAllEmployee();
    this.getAllPacientes();

  }

  private getMonth(dateString: string): Date {
    const dateRegex = /(\d{2})\/(\d{2})\/(\d{4})/;
    const match = dateRegex.exec(dateString);

    return match != null ? new Date(parseInt(match[3]), parseInt(match[2]) - 1, 1) : new Date();
  }

  async getAllEmployee() {

    this.apiService.getAllEmployee().subscribe((data: any) => {
      
      if (data != null) {
        var resultData = data.response;
        data = data.response
          for (let index = 0; index < data.length; index++) {
            resultData = data[index]
            if (resultData.ativo == true) {
              this.medicos++
            }
        }
      }
    },
      (error: any) => {
        if (error) {
          if (error.status == 404) {
            if (error.error && error.error.message) {
            }
          }
        }
      });
  }

  async getAllPacientes() {

    this.apiService.getAllPaciente().subscribe((data: any) => {
      if (data != null) {
        var resultData = data.response;
        data = data.response
          for (let index = 0; index < data.length; index++) {
            resultData = data[index]
            if (resultData.ativo == true) {
              this.pacientes++
            }
          }
      }
    },
      (error: any) => {
        if (error) {
          if (error.status == 404) {
            if (error.error && error.error.message) {
            }
          }
        }
      });
  }

  loadChart() {

    let label = []
    let data = []

    for (let item of this.result) {
      label.push(item.month)
      data.push(item.value)
    }

    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: 'Consultas por Mês',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  getData(): Observable<string> {

    var subject = new Subject<string>();

    this.apiService.getAllConsulta().subscribe((data: any) => {
      let object = []

      if (data != null) {
        var resultData = data.response;
        
        const d = this.datePipe.transform(new Date(), "dd/MM/yyyy")

        for (let index = 0; index < resultData.length; index++) {
          this.date = resultData[index];
          this.date.data = this.datePipe.transform(this.date.data, "dd/MM/yyyy");

          object.push(this.date.data);

          if (d == this.date.data && this.date.retorno == true) {
            this.retornos++
          }
        }

        this.dataSource = object

        subject.next(this.dataSource);
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
