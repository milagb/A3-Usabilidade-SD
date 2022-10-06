import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';
import { CadastroUsuarioService } from './cadastro-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private cadastroUsuarioService: CadastroUsuarioService) { }

  usuarioJaExiste(){
    return (control: AbstractControl) => {
      return control.valueChanges. pipe(switchMap((nomeUsuario) => this.cadastroUsuarioService.verificaUsuarioExistente(nomeUsuario)
      ),
      map((usuarioExiste) =>
      usuarioExiste ? { usuarioExiste:true} : null
      ),
      first()
      );
    };
  }

}
