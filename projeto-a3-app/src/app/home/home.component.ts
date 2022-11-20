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
  demo1TabIndex = 0

  constructor(private authService: AutenticacaoService, private apiService: ApiService,
    private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  registerUser(user: any){
    this.apiService.registerUser(user).subscribe((res: any) => {
      console.log(res)
      this.toast.success({detail:"Mensagem de sucesso",summary:"Usuário registrado com sucesso", duration:5000})
      setTimeout(() => {
        const tabCount = 2;
        this.demo1TabIndex = (this.demo1TabIndex + 1) % tabCount;
      }, 500);
    },err =>{
      console.log(err);
      this.toast.error({detail:"Cadastro falhou",summary:"Email já existe!", duration:5000});
    })
  }

  login(){
    this.isLoading = true
    console.log(this.senha)
    let credentials = {
      username: this.usuario,
      password: this.senha
    }

    this.apiService.loginUser(credentials).subscribe((res: any) => {  
      console.log('token',res)   
      sessionStorage.setItem("token", res.token) 
      sessionStorage.setItem("user", res.user.firstname) 
      sessionStorage.setItem("cargo", res.user.cargo) 
              setTimeout(() => {
                this.router.navigate(['tela-inicial']);
              }, 2000);
    },
    (error :any)=> { 
      console.log(error);
      this.toast.error({detail:"Falha no login",summary:"Senha ou Email incorretos", duration:5000});
    }); 
  }

}
