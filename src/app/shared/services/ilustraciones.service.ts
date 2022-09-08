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
  ];

  empresas: IlustracionesInterface[] = [
    {
      autor: 'JP',
      titulo: 'NTT-Data',
      descripcion: 'Actualmente sigo trabajando en NTT-Data, empresa multinacional de origen Japones, con mas de 100.000 empleados en todo el mundo.',
      imagen: 'ntt-data',
      imagen_url: 'assets/empresas/ntt-card.png'
    },
    {
      autor: 'JP',
      titulo: 'BBVA',
      descripcion: 'Desarrollando soluciones para el BBVA, empresa líder en el sector financiero. Utilizando Vanilla JavaScript y tecnologias del propio banco como Cells. Programador Cells Certificado',
      imagen: 'bbva',
      imagen_url: 'assets/empresas/bbva-card.png'
    },
    {
      autor: 'JP',
      titulo: 'Iberdrola',
      descripcion: 'Trabajando para el sector de las renovables. Implementando soluciones basadas en los criterios de aceptación del cliente.',
      imagen: 'iberdrola',
      imagen_url: 'assets/empresas/iberdrola-card.png'
    }
  ];


  constructor() { }

  get Ilustraciones() {
    return this.ilustraciones;
  }

  get empresasTop() {
    return this.empresas;
  }
}
