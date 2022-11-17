import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
 {
  path:'',
  pathMatch:'full',
  redirectTo:'home'
},
{
  path:'home',
  loadChildren: () => import('./home/home.module').then((m)=>m.HomeModule)
},
{
  path: 'tela-inicial',
  loadChildren: () => import('./tela-inicial/tela-inicial.module').then((m) => m.TelaInicialModule),

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
