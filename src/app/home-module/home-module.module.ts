import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PrvComponent } from './components/prv/prv.component';
import { PvtComponent } from './components/pvt/pvt.component';
import { HptComponent } from './components/hpt/hpt.component';
import { FinComponent } from './components/fin/fin.component';


@NgModule({
  declarations: [
    HomeComponent,
    PrvComponent,
    PvtComponent,
    HptComponent,
    FinComponent
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule
  ]
})
export class HomeModuleModule { }
