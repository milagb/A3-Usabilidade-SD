import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TelaInicialRoutingModule } from './tela-inicial-routing.module';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from '../componentes/nav/nav.component';
import { AddMedicosComponent } from './medicos/add-medicos/add-medicos.component';
import { EditMedicosComponent } from './medicos/edit-medicos/edit-medicos.component';
import { ViewMedicosComponent } from './medicos/view-medicos/view-medicos.component';
import { MedicosComponent } from './medicos/medicos.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';

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
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PacientesComponent } from './pacientes/pacientes.component';
import { AddPacientesComponent } from './pacientes/add-pacientes/add-pacientes.component';
import { ViewPacientesComponent } from './pacientes/view-pacientes/view-pacientes.component';
import { EditPacientesComponent } from './pacientes/edit-pacientes/edit-pacientes.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { AddConsultasComponent } from './consultas/add-consultas/add-consultas.component';
import { ViewConsultasComponent } from './consultas/view-consultas/view-consultas.component';
import { EditConsultasComponent } from './consultas/edit-consultas/edit-consultas.component';
import { NgToastModule } from 'ng-angular-popup'
import { DatePipe } from '@angular/common';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';



@NgModule({
  declarations: [
    TelaInicialComponent,
    HomeComponent,
    NavComponent,
    AddMedicosComponent,
    EditMedicosComponent,
    ViewMedicosComponent,
    MedicosComponent,
    AgendamentosComponent,
    PacientesComponent,
    AddPacientesComponent,
    ViewPacientesComponent,
    EditPacientesComponent,
    ConsultasComponent,
    AddConsultasComponent,
    ViewConsultasComponent,
    EditConsultasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxMatTimepickerModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
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
    NgToastModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [DatePipe]
})
export class TelaInicialModule { }
