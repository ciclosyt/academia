import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  public fuente: number = 45;

  constructor(  ) { }

  ngOnInit(): void {
  }

}
