import { Component, OnInit } from '@angular/core';
import { IlustracionesService } from '../../services/ilustraciones.service';
import { IlustracionesInterface } from '../../interface/ilustraciones.interface';
import { SharingService } from '../../services/sharing.service';

@Component({
  selector: 'app-about-empresas',
  templateUrl: './about-empresas.component.html',
  styleUrls: ['./about-empresas.component.scss']
})
export class AboutEmpresasComponent implements OnInit {

  empresas!: IlustracionesInterface[];

  constructor(private ilustraciones: IlustracionesService,
              private sharing: SharingService) { }

  ngOnInit(): void {
    this.empresas = this.ilustraciones.empresasTop;
  }

  redirectLinkedin(){

    this.sharing.redirectLinkedin();
    
  }
}
