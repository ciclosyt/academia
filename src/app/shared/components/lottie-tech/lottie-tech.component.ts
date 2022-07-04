import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-lottie-tech',
  templateUrl: './lottie-tech.component.html',
  styleUrls: ['./lottie-tech.component.scss']
})
export class LottieTechComponent implements OnInit {

  options: AnimationOptions = {
    path: 'assets/animation/lottie-tech.json'
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
