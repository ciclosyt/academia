import { Component, OnInit } from '@angular/core';
import { IlustracionesInterface } from '../../interface/ilustraciones.interface';
import { IlustracionesService } from '../../services/ilustraciones.service';

@Component({
  selector: 'app-academia-diferencia',
  templateUrl: './academia-diferencia.component.html',
  styleUrls: ['./academia-diferencia.component.scss']
})
export class AcademiaDiferenciaComponent implements OnInit {

  ilustraciones!: IlustracionesInterface[];

  constructor( private ilustacion:IlustracionesService ) { }

  ngOnInit(): void {
    this.ilustraciones = this.ilustacion.Ilustraciones;
  }

}
