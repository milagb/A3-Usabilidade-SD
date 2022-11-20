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
    
    if (medico.ativo == '') {
      medico.ativo = false
    }
    
    if (medico) {
      this.apiService.saveEmployee(medico).subscribe(async data => {
        this.result = data

        console.log(this.result)

        if (data != null) {
          if (this.result.message == 'medico created successfully!') {
            this.toast.success({ detail: "Mensagem de sucesso", summary: 'Médico registrado com sucesso', duration: 5000 })
            setTimeout(() => {
              this.router.navigate(['/medicos']);
            }, 800);
          }
        }
      },
        async error => {
          this.toast.error({detail:"Mensagem de erro",summary: "Falha ao adicionar médico", duration:5000})
          setTimeout(() => {
            //this.router.navigate(['/medicos']);
          }, 500);
        });
    }
  }
}

