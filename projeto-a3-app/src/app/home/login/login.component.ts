import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario='';
  senha='';

  constructor(private authService: AutenticacaoService) {}

  ngOnInit(): void {}

    login(){
      this.authService.autenticar(this.usuario, this.senha).subscribe(()=> {
        console.log('Autenticado com Sucesso!');
      },
      (error) => {
        alert('Usuário ou Senha inválido!');
        console.log(error);
      }
      );
    }
}
