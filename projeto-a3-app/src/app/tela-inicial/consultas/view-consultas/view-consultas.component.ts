import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-view-consultas',
  templateUrl: './view-consultas.component.html',
  styleUrls: ['./view-consultas.component.scss']
})
export class ViewConsultasComponent implements OnInit {

  consultaId: any;
  consultaDetail : any= [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); 
   }

  ngOnInit(): void {
    this.consultaId = this.route.snapshot.params['consultaId'];      
    this.getConsultaDetailById();
  }

  getConsultaDetailById() {       
    this.apiService.getConsultaDetailById(this.consultaId).subscribe((data : any) => {      
      console.log('data', data);
      if (data != null) {
        var resultData = data;
        if (resultData) {
          this.consultaDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}
