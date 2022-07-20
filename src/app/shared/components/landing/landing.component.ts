import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { Alumnos } from '../../interface/alumnos.interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  alumnosLanding!: Alumnos[];
  sizeFont:number = 45

  constructor( private alumnos: AlumnosService ) { }

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos() {
    this.alumnosLanding = this.alumnos.getAlumnos;
  }

}
