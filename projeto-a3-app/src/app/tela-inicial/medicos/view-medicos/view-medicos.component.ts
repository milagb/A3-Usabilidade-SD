import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-view-medicos',
  templateUrl: './view-medicos.component.html',
  styleUrls: ['./view-medicos.component.scss']
})
export class ViewMedicosComponent implements OnInit {

  employeeId: any;
  employeeDetail : any= [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private dateAdapter: DateAdapter<Date>) { 
    this.dateAdapter.setLocale('en-GB'); 
  }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];      
    this.getEmployeeDetailById();
  }

  getEmployeeDetailById() {       
    this.apiService.getEmployeeDetailById(this.employeeId).subscribe((data : any) => {      
      console.log('data', data.response);
      if (data != null) {
        var resultData = data.response;
        if (resultData) {
          for (let index = 0; index < resultData.length; index++) {
            const element = resultData[index];
            this.employeeDetail.firstname = element.firstname;
            this.employeeDetail.lastname = element.lastname;
            this.employeeDetail.email = element.email;
            this.employeeDetail.occupation = element.occupation;
            this.employeeDetail.nascimento = element.nascimento;
            this.employeeDetail.celular = element.celular;
            this.employeeDetail.telefone = element.telefone;
            this.employeeDetail.crm = element.crm;
            this.employeeDetail.uf = element.uf;
            this.employeeDetail.email = element.email;
            this.employeeDetail.ativo = element.ativo;
          }
          console.log('data', this.employeeDetail.occupation);
        }
      }
    },
    (error :any)=> { }); 
  }

}
