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
import { LottieComponent } from './components/lottie/lottie.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { TechnologyComponent } from './components/technology/technology.component';
import { LottieTechComponent } from './components/lottie-tech/lottie-tech.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { ContactComponent } from './components/contact/contact.component';
import { LottieServiceComponent } from './components/lottie-service/lottie-service.component';
import { AcademiaLandingComponent } from './components/academia-landing/academia-landing.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { AcademiaServiciosComponent } from './components/academia-servicios/academia-servicios.component';
import { AcademiaDiferenciaComponent } from './components/academia-diferencia/academia-diferencia.component';
import { GridIlustracionesComponent } from './components/grid-ilustraciones/grid-ilustraciones.component';

export function playerFactory() { // add this line
  return player; // add this line
} 


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    PresentComponent,
    FormularioComponent,
    LandingComponent,
    HeaderResponsiveComponent,
    LottieComponent,
    TechnologyComponent,
    LottieTechComponent,
    TituloComponent,
    ContactComponent,
    LottieServiceComponent,
    AcademiaLandingComponent,
    StepperComponent,
    AcademiaServiciosComponent,
    AcademiaDiferenciaComponent,
    GridIlustracionesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    CdkStepperModule,
    RouterModule,
    LottieModule.forRoot({ player: playerFactory}),
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    PresentComponent,
    FormularioComponent,
    LandingComponent,
    HeaderResponsiveComponent,
    LottieComponent,
    TechnologyComponent,
    LottieTechComponent,
    TituloComponent,
    ContactComponent,
    LottieServiceComponent,
    AcademiaLandingComponent,
    AcademiaServiciosComponent,
    AcademiaDiferenciaComponent,
    GridIlustracionesComponent
  ]
})
export class SharedModule { }
