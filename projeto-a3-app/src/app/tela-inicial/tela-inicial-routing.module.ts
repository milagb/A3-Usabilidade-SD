import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { HomeComponent } from "./home/home.component";
import { MedicosComponent } from "./medicos/medicos.component";
import { AddMedicosComponent } from "./medicos/add-medicos/add-medicos.component";
import { ViewMedicosComponent } from "./medicos/view-medicos/view-medicos.component";
import { EditMedicosComponent } from "./medicos/edit-medicos/edit-medicos.component";
import { AgendamentosComponent } from "./agendamentos/agendamentos.component";
import { PacientesComponent } from './pacientes/pacientes.component';
import { AddPacientesComponent } from './pacientes/add-pacientes/add-pacientes.component';
import { ViewPacientesComponent } from './pacientes/view-pacientes/view-pacientes.component';
import { EditPacientesComponent } from './pacientes/edit-pacientes/edit-pacientes.component';
import { AddConsultasComponent } from './consultas/add-consultas/add-consultas.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ViewConsultasComponent } from './consultas/view-consultas/view-consultas.component';
import { EditConsultasComponent } from './consultas/edit-consultas/edit-consultas.component';

const routes: Routes = [{
  path: '',
  component: TelaInicialComponent,
  children: [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'agenda',
      component: AgendamentosComponent
    },
    {
      path: 'consultas',
      component: ConsultasComponent
    },
    {
      path: 'add-consultas',
      component: AddConsultasComponent
    },
    {
      path: 'view-consultas/:consultaId',
      component: ViewConsultasComponent
    },
    {
      path: 'edit-consultas/:consultaId',
      component: EditConsultasComponent
    },
    {
      path: 'medicos',
      component: MedicosComponent
    },
    {
      path: 'view-medicos/:employeeId',
      component: ViewMedicosComponent
    },
    {
      path: 'add-medicos',
      component: AddMedicosComponent
    },
    {
      path: 'edit-medicos/:Id',
      component: EditMedicosComponent
    },
    {
      path: 'pacientes',
      component: PacientesComponent
    },
    {
      path: 'add-pacientes',
      component: AddPacientesComponent
    },
    {
      path: 'view-pacientes/:pacienteId',
      component: ViewPacientesComponent
    },
    {
      path: 'edit-pacientes/:pacienteId',
      component: EditPacientesComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaInicialRoutingModule { }
