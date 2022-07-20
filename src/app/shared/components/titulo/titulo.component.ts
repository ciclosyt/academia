import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() tamanio: number = 16;

  constructor() { }

  ngOnInit(): void {
  }

  modificarTamanio():void {

    const titulo = document.querySelectorAll('h1:first-letter');

    console.log(titulo);
    

  }
 
 
}
