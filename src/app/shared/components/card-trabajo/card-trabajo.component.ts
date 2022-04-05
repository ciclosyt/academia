import { Component, Input, OnInit } from '@angular/core';
import { Rutas } from '../../interface/rutas.interface';

@Component({
  selector: 'app-card-trabajo',
  templateUrl: './card-trabajo.component.html',
  styleUrls: ['./card-trabajo.component.scss']
})
export class CardTrabajoComponent implements OnInit {

  @Input()proyecto!: Rutas;

  constructor() { }

  ngOnInit(): void {
  }

}
