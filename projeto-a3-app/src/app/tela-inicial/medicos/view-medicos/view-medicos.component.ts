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
      console.log('data', data);
      if (data != null) {
        var resultData = data;
        if (resultData) {
          this.employeeDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}
