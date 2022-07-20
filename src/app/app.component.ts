
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import * as Aos from 'aos';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mostrar: boolean = true
  responsive:boolean = true

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {

    this.breakpointObserver.observe(['(max-width: 1000px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        console.log('mobile');
        this.responsive = false;
      }else{
        console.log('desktop');
        this.responsive = true;
      }
    });

    setTimeout(() => {
      
      this.mostrar = false
      
    }, 4500);

    Aos.init();
  
  }
  title = 'Jose Parrilla Academy';
}
