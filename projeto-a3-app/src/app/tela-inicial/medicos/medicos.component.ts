import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api.service";

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {

  displayedColumns: string[] = ['crm', 'nome', 'sobrenome', 'especialiidade', 'email', 'fone', 'uf', 'ativo', 'actions'];
  dataSource: any = [];
  

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  async getAllEmployee() {
    this.apiService.getAllEmployee().subscribe((data : any) => {

      if (data != null) {
        var resultData = data;
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
