import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  Id: any;
  employeeDetail : any= [];
  cargo = '';
  nome = '';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private route: ActivatedRoute, private apiService: ApiService) { 

  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
      else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  ngOnInit(): void {  
    this.route.params.subscribe(params => {
      this.Id = params['Id']
    });
    this.getEmployeeDetailById();
  }

  getEmployeeDetailById() {      
    console.log('data', this.Id); 
    this.apiService.getUserDetailById(this.Id).subscribe((data : any) => {      
      //console.log(data); 
      if (data != null) {
        var resultData = data;
        if (resultData) {
          this.employeeDetail = resultData;
          this.cargo = this.employeeDetail.cargo;
          this.nome = this.employeeDetail.firstname;
        }
      }
    },
    (error :any)=> {
      console.log('error'); 
     }); 
  }

}
