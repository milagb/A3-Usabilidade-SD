import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService } from 'src/app/api.service';
import { formatDate } from '@angular/common';
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
  empoloyeeID : number = 0;
  empList: Array<{nome: string, empoloyeeID: number}> = []; 
  
  dates = [
    "01/01/2020",
    "12/02/2020",
    "23/01/2020",
    "01/02/2020",
    "01/02/2020",
    "01/02/2020",
    "01/06/2020",
    "01/02/2020",
    "01/05/2020",
    "01/12/2020",
    "01/11/2020",
    "01/08/2020",

  ]

  constructor(private apiService: ApiService, private datePipe: DatePipe) { }

  ngOnInit() {

    for (let index = 0; index < this.dates.length; index++) {
      const element = new Date(this.dates[index]);
      //console.log(this.monthNames[element.getMonth()])
      this.nome = this.dates[index];
      this.empoloyeeID = 1;
      this.empList.push({ nome: this.nome, empoloyeeID: this.empoloyeeID });
    }

    const map = this.empList.reduce((map, current) => {
      const month = this.getMonth(current.nome);
      //console.log('month', month)
      //console.log('month 2', current.nome)
      const key = month.toISOString();
      if (!map.has(key)) {
        map.set(key, 0);
      }

      //console.log('teste: ', key, map.get(key)! + current.empoloyeeID)
      map.set(key, map.get(key)! + current.empoloyeeID);

      return map;
    }, new Map<string, number>());

    const months = Array.from(map.keys())
      .sort((a, b) => a.localeCompare(b));
    this.result = months.map(x => ({
      month: formatDate(x, 'MMM', 'en-US'),
      value: map.get(x)
    }));

    this.getAllEmployee();
    this.loadChart();
  }

  private getMonth(dateString: string): Date {
    const dateRegex = /(\d{2})\/(\d{2})\/(\d{4})/;
    const match = dateRegex.exec(dateString);

    return match != null ? new Date(parseInt(match[3]), parseInt(match[2]) - 1, 1) : new Date();
  }

  async getAllEmployee() {
    this.apiService.getAllEmployee().subscribe((data: any) => {
      if (data != null) {
        var resultData = data;
        if (resultData) {
          //console.log('3', data);
          for (let index = 0; index < data.length; index++) {
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

  async loadChart() {

    let label = []
    let data = []

    for(let item of this.result){
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

}
