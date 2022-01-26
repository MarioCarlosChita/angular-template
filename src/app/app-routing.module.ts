import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
   path:'',
   loadChildren:()=> import('./autenticacao-module/autenticacao-module.module').then(module=>module.AutenticacaoModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
