import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../services/sharing.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  constructor( private sharing: SharingService ) { }

  ngOnInit(): void {
  }

  email(){
    this.sharing.email();
  }

  message(){
    this.sharing.sendMessage();
  }
}
