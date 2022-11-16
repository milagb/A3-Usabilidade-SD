import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id = '';
  usuario='';
  senha='';
  teste=[];
  isLoading = false;

  constructor(private authService: AutenticacaoService, private apiService: ApiService,
    private router: Router, private toast: NgToastService) { }

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

    this.apiService.loginUser(credentials).subscribe((res: any) => {  
      console.log(res._id)    
              setTimeout(() => {
                this.router.navigate(['tela-inicial/', res._id]);
              }, 2000);
    },
    (error :any)=> { 
      console.log(error);
      this.toast.error({detail:"Login Failed",summary:"Incorrect email or password", duration:5000});
    }); 
  }

}
