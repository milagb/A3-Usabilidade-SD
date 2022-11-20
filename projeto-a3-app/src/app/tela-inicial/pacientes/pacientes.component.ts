import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from "src/app/api.service";
import { DialogAnimationsExampleDialogComponent }  from "src/app/dialog-example/dialog-example.component";

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  displayedColumns: string[] = ['cpf', 'nome', 'sobrenome', 'endereco', 'email', 'fone', 'sexo', 'ativo', 'actions'];
  dataSource: any = [];

  constructor(private apiService: ApiService, public dialog: MatDialog, private toast: NgToastService) { }

  ngOnInit(): void {
    this.getAllPaciente()
  }

  openDialog(id: any) {
    let dialogRef = this.dialog.open(DialogAnimationsExampleDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'true') {
        console.log(`result: ${id}`)
        console.log(`result: ${result}`)
        this.apiService.deletePaciente(id).subscribe(async data => {
          console.log(`deletou: ${id}`)
          this.getAllPaciente();
        },
          async error => {
            this.toast.error({detail:"Error Message",summary: error, duration:5000})
          });
      }
    })
  }

  async getAllPaciente() {
    this.apiService.getAllPaciente().subscribe((data : any) => {

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
