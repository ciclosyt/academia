import { Injectable } from '@angular/core';
import { Alumnos } from '../interface/alumnos.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumnos: Alumnos[] = [
    {
      nombre: 'Juan',
      profesion: 'Bussines Inteligence',
      foto: 'assets/alumnos/juan-card.jpg',
      avatar: 'assets/avatar/juan-avatar.jpg',
      clase:'avatar-juan',
      comentario: 'Soy ingeniero informatico y me dedico de manera profesional a la parte de Bussines Inteligence. Me asignaron un proyecto que tenia tecnologia FrontEnd y contacte con Jose y fue lo mejor que hice. Lo recomiendo.'
    },
    {
      nombre: 'Clara',
      profesion: 'Fotógrafa',
      foto: 'assets/alumnos/clara-card.jpg',
      avatar: 'assets/avatar/clara-avatar.jpg',
      clase:'avatar-clara',
      comentario: 'Queria aprender programacion porque queria saber gestionar mi propia pagina web. Adquirí todos los conocimientos necesarios para poder hacerlo. Ahora, me gusta mucho la programacion y la fotografia.'
    },
    {
      nombre: 'Carlos',
      profesion: 'Entrenador',
      foto: 'assets/alumnos/carlos-card.jpg',
      avatar: 'assets/avatar/carlos-avatar.jpg',
      clase:'avatar-carlos',
      comentario: 'Siempre quise crear mi propio Software para gestionar mis equipos y asi, poder tener todo automatizado. Jose me dio todas las herramientas, tips y conocimientos para poder hacerlo realidad.'
    },

  ]

  constructor() { }

  get getAlumnos(): Alumnos[] {
    return this.alumnos;
  }
}
