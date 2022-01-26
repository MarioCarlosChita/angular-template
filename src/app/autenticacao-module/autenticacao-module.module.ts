import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacaoModuleRoutingModule } from './autenticacao-module-routing.module';
import { AutenticacaoComponent } from './components/autenticacao/autenticacao.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AutenticacaoComponent
  ],
  imports: [
    CommonModule,
    AutenticacaoModuleRoutingModule
   ,ReactiveFormsModule
  ]
})
export class AutenticacaoModuleModule { }
