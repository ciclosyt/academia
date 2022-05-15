
import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mostrar: boolean = true

  ngOnInit(): void {
    setTimeout(() => {

      this.mostrar = false
      
    }, 4500);

    Aos.init()
    
  }
  title = 'Parrilla';
}
