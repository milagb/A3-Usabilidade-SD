import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastroConsultaComponent } from "./cadastro-consulta/cadastro-consulta.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [{
  path: '',
  component: TelaInicialComponent,
  children: [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'cadastro-consulta',
      component: CadastroConsultaComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaInicialRoutingModule { }
