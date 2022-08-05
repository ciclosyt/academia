import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-lottie-service',
  templateUrl: './lottie-service.component.html',
  styleUrls: ['./lottie-service.component.scss']
})
export class LottieServiceComponent implements OnInit {

  options: AnimationOptions = {
    path: 'assets/animation/services-lottie.json'
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
