import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-consultas',
  templateUrl: './view-consultas.component.html',
  styleUrls: ['./view-consultas.component.scss']
})
export class ViewConsultasComponent implements OnInit {

  consultaId: any;
  consultaDetail : any= [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.consultaId = this.route.snapshot.params['consultaId'];      
    this.getEmployeeDetailById();
  }

  getEmployeeDetailById() {       
    // this.httpProvider.getEmployeeDetailById(this.consultaId).subscribe((data : any) => {      
    //   if (data != null && data.body != null) {
    //     var resultData = data.body;
    //     if (resultData) {
    //       this.consultaDetail = resultData;
    //     }
    //   }
    // },
    // (error :any)=> { }); 
  }

}
