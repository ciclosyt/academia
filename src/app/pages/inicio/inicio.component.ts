import { Component, OnInit } from '@angular/core';

import { AlumnosService } from 'src/app/shared/services/alumnos.service';
import { Alumnos } from 'src/app/shared/interface/alumnos.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  mostrar: boolean = true;

  alumnosLanding!: Alumnos[];


  constructor( private alumnos: AlumnosService ) { }

  ngOnInit(): void {

    this.getAlumnos();
    
  }

  getAlumnos() {
    this.alumnosLanding = this.alumnos.getAlumnos;
  }


}
