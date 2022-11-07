import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelaInicialRoutingModule } from './tela-inicial-routing.module';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastroConsultaComponent } from './cadastro-consulta/cadastro-consulta.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from '../componentes/nav/nav.component';
import { AddMedicosComponent } from './medicos/add-medicos/add-medicos.component';
import { EditMedicosComponent } from './medicos/edit-medicos/edit-medicos.component';
import { ViewMedicosComponent } from './medicos/view-medicos/view-medicos.component';

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
import { MatTableModule  } from "@angular/material/table";
import { MatPaginatorModule  } from "@angular/material/paginator";
import { MatSortModule  } from "@angular/material/sort";
import { MedicosComponent } from './medicos/medicos.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';



@NgModule({
  declarations: [
    TelaInicialComponent,
    CadastroConsultaComponent,
    HomeComponent,
    NavComponent,
    AddMedicosComponent,
    EditMedicosComponent,
    ViewMedicosComponent,
    MedicosComponent,
    AgendamentosComponent
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class TelaInicialModule { }
