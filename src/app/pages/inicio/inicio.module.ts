import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InicioRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InicioModule { }
