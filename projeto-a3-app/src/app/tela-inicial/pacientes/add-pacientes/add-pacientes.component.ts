import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "src/app/api.service";
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-pacientes',
  templateUrl: './add-pacientes.component.html',
  styleUrls: ['./add-pacientes.component.scss']
})
export class AddPacientesComponent implements OnInit {

  isSubmitted: boolean = false;
  result: any;

  constructor(private apiService: ApiService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  AddPacientes(paciente: any) {
    this.isSubmitted = true;
    if (paciente) {
      this.apiService.savePaciente(paciente).subscribe( async data => {
        console.log('data: ', data)
        this.result = data
        console.log('this.result: ', this.result)
        if (data != null) {
          if (this.result.status == 200) {
            this.toast.success({ detail: "Success Message", summary: 'Paciente registered successfully', duration: 5000 })
            setTimeout(() => {
              this.router.navigate(['/pacientes']);
            }, 800);
          }
        }
      },
      async error => {
          this.toast.error({ detail: "Error Message", summary: "Failed to add paciente", duration: 5000 })
          setTimeout(() => {
            //this.router.navigate(['/pacientes']);
          }, 500);
        });
    }
  }

}
