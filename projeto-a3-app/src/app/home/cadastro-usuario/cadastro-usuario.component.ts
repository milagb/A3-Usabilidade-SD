import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadastroUsuario } from './cadastro-usuario';
import { CadastroUsuarioService } from './cadastro-usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  cadastroUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cadastroUsuarioService: CadastroUsuarioService
    ) { }

  ngOnInit(): void {

    this.cadastroUsuarioForm = this.formBuilder.group({
      email: [''],
      fullName: [''],
      userName: [''],
      password: [''],
    });
  }

  cadastrar(){
    const cadastroUsuario = this.cadastroUsuarioForm.getRawValue() as CadastroUsuario;
    console.log(cadastroUsuario);
  }

}
