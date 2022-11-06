import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelaInicialRoutingModule } from './tela-inicial-routing.module';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastroConsultaComponent } from './cadastro-consulta/cadastro-consulta.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from '../componentes/nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule  } from "@angular/material/core";



@NgModule({
  declarations: [
    TelaInicialComponent,
    CadastroConsultaComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    TelaInicialRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class TelaInicialModule { }
