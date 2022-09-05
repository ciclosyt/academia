import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../services/sharing.service';

@Component({
  selector: 'app-about-landing',
  templateUrl: './about-landing.component.html',
  styleUrls: ['./about-landing.component.scss']
})
export class AboutLandingComponent implements OnInit {

  constructor( private sharing: SharingService ) { }

  ngOnInit(): void {
  }

  sendMessage(): void {
    this.sharing.sendMessage();
  }

}
