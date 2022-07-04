import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-lottie',
  templateUrl: './lottie.component.html',
  styleUrls: ['./lottie.component.scss']
})
export class LottieComponent implements OnInit {

  options: AnimationOptions = {
    path: 'assets/animation/mobile-dinamic.json'
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  constructor() { }

  ngOnInit(): void {    

}



}
