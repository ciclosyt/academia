import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path:'',
    redirectTo:'inicio',
    pathMatch: 'full'
  },
  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  
 
 {
  path:'**',
  redirectTo:'inicio'
},
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  {
      useHash: false,
      anchorScrolling: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
