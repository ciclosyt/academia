import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PresentComponent } from './components/present/present.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LandingComponent } from './components/landing/landing.component';
import { HeaderResponsiveComponent } from './components/header-responsive/header-responsive.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    PresentComponent,
    FormularioComponent,
    LandingComponent,
    HeaderResponsiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PresentComponent,
    FormularioComponent,
    LandingComponent,
    HeaderResponsiveComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
