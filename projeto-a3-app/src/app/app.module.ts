import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { RodapeModule } from './componentes/rodape/rodape.module';
import { TelaInicialModule } from './tela-inicial/tela-inicial.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DialogAnimationsExampleDialogComponent } from './dialog-example/dialog-example.component';

@NgModule({
  declarations: [AppComponent, DialogAnimationsExampleDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RodapeModule,
    CabecalhoModule,
    TelaInicialModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
