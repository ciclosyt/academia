import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../services/sharing.service';

@Component({
  selector: 'app-academia-landing',
  templateUrl: './academia-landing.component.html',
  styleUrls: ['./academia-landing.component.scss']
})
export class AcademiaLandingComponent implements OnInit {

  constructor( private sharing: SharingService) { }

  ngOnInit(): void {
  }

  dowloadFile(){
    this.sharing.dowloadFile();
  }

}
