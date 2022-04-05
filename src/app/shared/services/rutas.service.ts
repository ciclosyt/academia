import { Injectable } from '@angular/core';
import { Rutas } from '../interface/rutas.interface';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  proyectos: Rutas[] = [
    {
      titulo: 'Ionic',
      explicacion: 'App realizada en ionic, consumiendo una API de noticias',
      img: 'ionic-card.jpg'
    },
    {
      titulo: 'Habitat',
      explicacion: 'App realizada en JavaScript y php',
      img: 'chalet-card.jpg'
    },
    {
      titulo: 'Clinica',
      explicacion: 'App realizada en Angular y noderJs, con base de datos MongoDB',
      img: 'clinica-card.jpg'
    },

  ]

  constructor() { }

  apiProyectos(): Rutas[] {
    return this.proyectos
  }

}
