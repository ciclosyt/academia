import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CardTrabajoComponent } from './components/card-trabajo/card-trabajo.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    SpinnerComponent,
    CardTrabajoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    SpinnerComponent,
    CardTrabajoComponent
  ]
})
export class SharedModule { }
