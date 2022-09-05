import { Injectable } from '@angular/core';
import { IlustracionesInterface } from '../interface/ilustraciones.interface';

@Injectable({
  providedIn: 'root'
})
export class IlustracionesService {

  ilustraciones: IlustracionesInterface[] = [
    {
      autor: 'JP',
      titulo: 'Atención Personalizada',
      descripcion: 'Nos enfocamos directamente en la atención personalizada de nuestros clientes, con el objetivo de brindar un servicio de calidad y de excelencia.',
      imagen: 'Educación',
      imagen_url: 'assets/ilustraciones/educator.png'
    },
    {
      autor: 'JP',
      titulo: 'Experiencia Contrastada',
      descripcion: 'Desarrollador de Software con amplia experiencia desarrollando en grandes empresas del sector IT.',
      imagen: 'Experiencia',
      imagen_url: 'assets/ilustraciones/project.png'
    },
    {
      autor: 'JP',
      titulo: 'Aprendizaje basado en proyectos reales',
      descripcion: 'Coger la teoria de los temarios y aplicarla en proyectos es la única manera de aprender a programar.',
      imagen: 'Aprendizaje',
      imagen_url: 'assets/ilustraciones/test.png'
    },
    {
      autor: 'JP',
      titulo: 'Vanguardia Tecnológica',
      descripcion: 'Nos movemos con las tendencias del mercado para así, tener un mayor porcentaje de exito en el sector IT.',
      imagen: 'Educación',
      imagen_url: 'assets/ilustraciones/react.png'
    },
  ]

  constructor() { }

  get Ilustraciones() {
    return this.ilustraciones;
  }
}
