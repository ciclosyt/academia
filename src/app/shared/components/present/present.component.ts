import { Component, Input, OnInit } from '@angular/core';
import { Alumnos } from '../../interface/alumnos.interface';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.scss']
})
export class PresentComponent implements OnInit {

  @Input() alumnos!: Alumnos[];

  constructor() { }

  ngOnInit(): void {
  }

}
