import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-medicos',
  templateUrl: './view-medicos.component.html',
  styleUrls: ['./view-medicos.component.scss']
})
export class ViewMedicosComponent implements OnInit {

  employeeId: any;
  employeeDetail : any= [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];      
    this.getEmployeeDetailById();
  }

  getEmployeeDetailById() {       
    // this.httpProvider.getEmployeeDetailById(this.employeeId).subscribe((data : any) => {      
    //   if (data != null && data.body != null) {
    //     var resultData = data.body;
    //     if (resultData) {
    //       this.employeeDetail = resultData;
    //     }
    //   }
    // },
    // (error :any)=> { }); 
  }

}
