import { Component, OnInit, Input } from '@angular/core';
import { IlustracionesInterface } from '../../interface/ilustraciones.interface';

@Component({
  selector: 'app-grid-ilustraciones',
  templateUrl: './grid-ilustraciones.component.html',
  styleUrls: ['./grid-ilustraciones.component.scss']
})
export class GridIlustracionesComponent implements OnInit {

  @Input() ilustracion!: IlustracionesInterface;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
