import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-view-pacientes',
  templateUrl: './view-pacientes.component.html',
  styleUrls: ['./view-pacientes.component.scss']
})
export class ViewPacientesComponent implements OnInit {

  pacienteId: any;
  pacienteDetail : any= [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); 
   }

  ngOnInit(): void {
    this.pacienteId = this.route.snapshot.params['pacienteId'];      
    this.getPacienteDetailById();
  }

  getPacienteDetailById() {       
    this.apiService.getPacienteDetailById(this.pacienteId).subscribe((data : any) => {      
      console.log('data', data);
      if (data != null) {
        var resultData = data;
        if (resultData) {
          this.pacienteDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}
