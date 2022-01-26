import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoComponent } from './components/autenticacao/autenticacao.component';

const routes: Routes = [
  {
    path: '',
    component: AutenticacaoComponent
  },
  {
    path: 'home',
    loadChildren: () => import('../home-module/home-module.module').then(module => module.HomeModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacaoModuleRoutingModule { }
