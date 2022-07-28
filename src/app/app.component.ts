
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { BreakpointsService } from './shared/services/breakpoints.service';

import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mostrar: boolean = true
  responsive:boolean = true


  constructor(  private breakpointObserver: BreakpointObserver,
                private breakService: BreakpointsService ) { }

  ngOnInit(): void {

    Aos.init();
    this.menuResponsive();
    this.fullScrean();
    this.desktopBreak();
    this.tabletBreak();
    this.mobileBreak();

    setTimeout(() => {
      
      this.mostrar = false
      
    }, 4500);
  
  }

  title = 'Jose Parrilla Academy';

  //metodos

  //fulScreen
  fullScrean(){

    this.breakpointObserver.observe(['(max-width: 5000px)','(min-width: 1401px)']).subscribe( (state: BreakpointState) =>{
      if (state.matches){

        let min = state.breakpoints['(min-width: 1401px)'];
        let max = state.breakpoints['(max-width: 5000px)'];
        
        if (min && max === true){
          console.log('esta dentro del rango fullScreen');
          this.breakService.sendSize(52);          
        }        
      }     
    })
  }

  //desktop
  desktopBreak(){

    this.breakpointObserver.observe(['(max-width: 1400px)','(min-width: 1001px)']).subscribe( (state: BreakpointState) =>{
      if (state.matches){

        let min = state.breakpoints['(min-width: 1001px)'];
        let max = state.breakpoints['(max-width: 1400px)'];
        
        if (min && max === true){
          console.log('esta dentro del rango desktop');
          this.breakService.sendSize(40);          
        }        
      }     
    })
  }

  //tablet
  tabletBreak(){

    this.breakpointObserver.observe(['(max-width: 1000px)','(min-width: 601px)']).subscribe( (state: BreakpointState) =>{
      if (state.matches){

        let min = state.breakpoints['(min-width: 601px)'];
        let max = state.breakpoints['(max-width: 1000px)'];
        
        if (min && max === true){
          console.log('esta dentro del rango tablet');
          this.breakService.sendSize(36)          
        }        
      }     
    })
  }

  // mobile
  mobileBreak(){

    this.breakpointObserver.observe(['(max-width: 600px)','(min-width: 0px)']).subscribe( (state: BreakpointState) =>{
      if (state.matches){

        let min = state.breakpoints['(min-width: 0px)'];
        let max = state.breakpoints['(max-width: 600px)'];
        
        if (min && max === true){
          console.log('esta dentro del rango mobil');
          this.breakService.sendSize(28)
        }        
      }     
    })
  }

  //menu responsive
  menuResponsive(){

    this.breakpointObserver.observe(['(max-width: 1000px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        console.log('mobile');
        this.responsive = false;
      }else{
        console.log('desktop');
        this.responsive = true;
      }
    });
  }

}
