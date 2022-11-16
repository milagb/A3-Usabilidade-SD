import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

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
import { MatProgressSpinnerModule  } from "@angular/material/progress-spinner";
import { MatSelectModule } from '@angular/material/select'

import { ApiService } from "../api.service";
import { NgToastModule } from 'ng-angular-popup'


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
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
    MatIconModule,
    NgToastModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [ApiService],
  exports: [HomeComponent]
})
export class HomeModule { }
