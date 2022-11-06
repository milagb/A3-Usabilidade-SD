import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario='';
  senha='';

  constructor(private authService: AutenticacaoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['tela-inicial']);
  }

}
