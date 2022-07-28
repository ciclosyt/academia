import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { Alumnos } from '../../interface/alumnos.interface';
import { BreakpointsService } from '../../services/breakpoints.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  alumnosLanding!: Alumnos[];

  constructor( private alumnos: AlumnosService,
               private breakService: BreakpointsService) {       }

  ngOnInit(): void {
    this.getAlumnos();

  }

  getAlumnos() {
    this.alumnosLanding = this.alumnos.getAlumnos;
  }

}
