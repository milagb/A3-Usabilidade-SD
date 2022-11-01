import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelaInicialRoutingModule } from './tela-inicial-routing.module';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    TelaInicialComponent
  ],
  imports: [
    CommonModule,
    TelaInicialRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ]
})
export class TelaInicialModule { }
