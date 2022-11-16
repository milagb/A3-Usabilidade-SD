import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { ApiService } from "src/app/api.service";
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-medicos',
  templateUrl: './add-medicos.component.html',
  styleUrls: ['./add-medicos.component.scss']
})
export class AddMedicosComponent implements OnInit {

  isSubmitted: boolean = false;

  constructor(private apiService: ApiService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  // registerMedicos(medico: any){
  //   this.apiService.registerMedicos(medico);
  // }

  AddEmployee(medico: any) {
    this.isSubmitted = true;
    if (medico) {
      this.apiService.saveEmployee(medico).subscribe(async data => {
        if (data != null) {
          if (data != null) {
            var resultData = data;
            if (resultData != null) {
              this.toast.success({detail:"Success Message",summary: 'Medico registered successfully', duration:5000})
              setTimeout(() => {
                this.router.navigate(['/medicos']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toast.error({detail:"Error Message",summary: error.message, duration:5000})
          setTimeout(() => {
            this.router.navigate(['/medicos']);
          }, 500);
        });
    }
  }
}

