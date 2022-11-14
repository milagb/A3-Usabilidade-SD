import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario='';
  senha='';
  isLoading = false;

  constructor(private authService: AutenticacaoService, private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(user: any){
    this.apiService.registerUser(user);
  }

  login(){
    this.isLoading = true
    let credentials = {
      email: this.usuario,
      password: this.senha
    }
    this.apiService.loginUser(credentials)
  }

}
