import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroUsuario } from './cadastro-usuario';
import { CadastroUsuarioService } from './cadastro-usuario.service';
import { minusculoValidator } from './minusculo.validator';
import { UsuarioExisteService } from './usuario-existe.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  cadastroUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cadastroUsuarioService: CadastroUsuarioService,
    private usuarioExisteService: UsuarioExisteService
    ) { }

  ngOnInit(): void {

    this.cadastroUsuarioForm = this.formBuilder.group(
      {
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [minusculoValidator],[this.usuarioExisteService.usuarioJaExiste()]],
      password: [''],
    },

    );
  }

  cadastrar(){
    const cadastroUsuario = this.cadastroUsuarioForm.getRawValue() as CadastroUsuario;
    console.log(cadastroUsuario);
  }

}
