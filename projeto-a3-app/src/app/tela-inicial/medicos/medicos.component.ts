import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api.service";
import { NgToastService } from 'ng-angular-popup'
import {MatDialog} from '@angular/material/dialog';
import { DialogAnimationsExampleDialogComponent }  from "src/app/dialog-example/dialog-example.component";

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {

  displayedColumns: string[] = ['crm', 'nome', 'sobrenome', 'especialiidade', 'email', 'fone', 'uf', 'ativo', 'actions'];
  dataSource: any = [];

  constructor(private apiService: ApiService, public dialog: MatDialog, private toast: NgToastService) { }

  ngOnInit(): void {
    this.getAllEmployee();
    console.log('aaain papai', sessionStorage.getItem('userid'))
  }

  openDialog(id: any) {
    let dialogRef = this.dialog.open(DialogAnimationsExampleDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'true') {
        console.log(`result: ${id}`)
        console.log(`result: ${result}`)
        this.apiService.deleteEmployeeById(id).subscribe(async data => {
          console.log(`deletou: ${id}`)
          this.getAllEmployee();
        },
          async error => {
            this.toast.error({detail:"Error Message",summary: error, duration:5000})
          });
      }
    })
  }

  async getAllEmployee() {
    this.apiService.getAllEmployee().subscribe((data : any) => {

      if (data != null) {
        var resultData = data.response;
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
