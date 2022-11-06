import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule  } from "@angular/material/form-field";


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
