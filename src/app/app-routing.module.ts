import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path:'', redirectTo:'inicio', pathMatch: 'full'},
  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  { path: 'servicios', loadChildren: () => import('./pages/servicios/servicios.module').then(m => m.ServiciosModule) }, 
  { path:'**', redirectTo:''}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  {
      useHash: true,
      anchorScrolling: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
