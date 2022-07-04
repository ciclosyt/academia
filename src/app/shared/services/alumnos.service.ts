import { Injectable } from '@angular/core';
import { Alumnos } from '../interface/alumnos.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumnos: Alumnos[] = [
    {
      nombre: 'Juan',
      foto: 'assets/img/alumnos/juan.jpg',
      comentario: 'Me gusta mucho el curso'
    },
    {
      nombre: 'Jose',
      foto: 'assets/img/alumnos/juan.jpg',
      comentario: 'Me gusta mucho el curso'
    },
    {
      nombre: 'Marta',
      foto: 'assets/img/alumnos/juan.jpg',
      comentario: 'Me gusta mucho el curso'
    },

  ]

  constructor() { }

  get getAlumnos(): Alumnos[] {
    return this.alumnos;
  }
}
