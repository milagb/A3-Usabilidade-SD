import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api.service";
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialogComponent }  from "src/app/dialog-example/dialog-example.component";

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {

  displayedColumns: string[] = ['agenda', 'medico', 'especialidade', 'data', 'horario', 'paciente', 'cpf', 'retorno', 'actions'];
  dataSource = [];
  result: any;

  constructor(private apiService: ApiService, private dateAdapter: DateAdapter<Date>, private datePipe: DatePipe, public dialog: MatDialog, private toast: NgToastService) {
    this.dateAdapter.setLocale('en-GB'); 
   }

  ngOnInit(): void {
    this.getAllConsulta();
  }

  openDialog(id: any) {
    let dialogRef = this.dialog.open(DialogAnimationsExampleDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'true') {
        console.log(`result: ${id}`)
        console.log(`result: ${result}`)
        this.apiService.deleteConsulta(id).subscribe(async data => {
          console.log(`deletou: ${id}`)
          this.getAllConsulta();
        },
          async error => {
            this.toast.error({detail:"Error Message",summary: error, duration:5000})
          });
      }
    })
  }

  async getAllConsulta() {
    this.apiService.getAllConsulta().subscribe((data : any) => {

      if (data != null) {
        var resultData = data.response;
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
