import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { ApiService } from "src/app/api.service";

@Component({
  selector: 'app-add-medicos',
  templateUrl: './add-medicos.component.html',
  styleUrls: ['./add-medicos.component.scss']
})
export class AddMedicosComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  registerMedicos(medico: any){
    this.apiService.registerMedicos(medico);
  }

}
