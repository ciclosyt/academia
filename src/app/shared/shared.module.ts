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
import { TechnologyComponent } from './components/technology/technology.component';
import { LottieTechComponent } from './components/lottie-tech/lottie-tech.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContactComponent } from './components/contact/contact.component';

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
    ContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
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
    ContactComponent
  ]
})
export class SharedModule { }
