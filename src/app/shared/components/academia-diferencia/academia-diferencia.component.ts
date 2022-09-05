import { Component, OnInit } from '@angular/core';
import { IlustracionesInterface } from '../../interface/ilustraciones.interface';
import { IlustracionesService } from '../../services/ilustraciones.service';
import { SharingService } from '../../services/sharing.service';

@Component({
  selector: 'app-academia-diferencia',
  templateUrl: './academia-diferencia.component.html',
  styleUrls: ['./academia-diferencia.component.scss']
})
export class AcademiaDiferenciaComponent implements OnInit {

  ilustraciones!: IlustracionesInterface[];

  constructor( private ilustacion:IlustracionesService,
                private sharing: SharingService ) { }

  ngOnInit(): void {
    this.ilustraciones = this.ilustacion.Ilustraciones;
  }

  sendMessage(){
    this.sharing.sendMessage();
  }

}
