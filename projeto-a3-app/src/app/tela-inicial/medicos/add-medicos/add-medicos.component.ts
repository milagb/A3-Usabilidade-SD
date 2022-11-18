import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "src/app/api.service";
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-medicos',
  templateUrl: './add-medicos.component.html',
  styleUrls: ['./add-medicos.component.scss']
})
export class AddMedicosComponent implements OnInit {

  isSubmitted: boolean = false;
  result: any;

  constructor(private apiService: ApiService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  AddEmployee(medico: any) {
    this.isSubmitted = true;
    if (medico) {
      this.apiService.saveEmployee(medico).subscribe(async data => {
        this.result = data

        if (data != null) {
          if (this.result.status == 200) {
            this.toast.success({ detail: "Success Message", summary: 'Medico registered successfully', duration: 5000 })
            setTimeout(() => {
              this.router.navigate(['/medicos']);
            }, 800);
          }
        }
      },
        async error => {
          this.toast.error({detail:"Error Message",summary: "Failed to add medico", duration:5000})
          setTimeout(() => {
            //this.router.navigate(['/medicos']);
          }, 500);
        });
    }
  }
}

