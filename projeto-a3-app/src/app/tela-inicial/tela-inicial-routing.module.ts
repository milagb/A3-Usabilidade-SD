import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastroConsultaComponent } from "./cadastro-consulta/cadastro-consulta.component";
import { HomeComponent } from "./home/home.component";
import { MedicosComponent } from "./medicos/medicos.component";
import { AddMedicosComponent } from "./medicos/add-medicos/add-medicos.component";
import { ViewMedicosComponent } from "./medicos/view-medicos/view-medicos.component";
import { EditMedicosComponent } from "./medicos/edit-medicos/edit-medicos.component";
import { AgendamentosComponent } from "./agendamentos/agendamentos.component";

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
      path: 'cadastro-consulta',
      component: CadastroConsultaComponent
    },
    {
      path: 'medicos',
      component: MedicosComponent
    },
    {
      path: 'view-medicos',
      component: ViewMedicosComponent
    },
    {
      path: 'add-medicos',
      component: AddMedicosComponent
    },
    {
      path: 'edit-medicos',
      component: EditMedicosComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaInicialRoutingModule { }
