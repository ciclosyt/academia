import { Component, OnInit, Input } from '@angular/core';
import { BreakpointsService } from '../../services/breakpoints.service';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {
  @Input() titulo: string = '';

  fontSIze!: number;

  constructor( private breakPoint: BreakpointsService ) { }

  ngOnInit(): void {

    this.breakPoint.size.subscribe(n => this.fontSIze = n)
  }


 
}
