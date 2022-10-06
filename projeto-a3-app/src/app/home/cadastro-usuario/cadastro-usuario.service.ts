import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroUsuario } from './cadastro-usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  constructor(private http: HttpClient) { }

  cadastraUsuario(cadastroUsuario: CadastroUsuario){
  return this.http.post('http://localhost:3000/user/signup', cadastroUsuario);
}

  verificaUsuarioExistente(nomeUsuario: string){
    return this.http.get('http://localhost:3000/user/exists/${nomeUsuario}');
  }

}

