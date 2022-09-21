import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { Email } from '../../interface/email.interface';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  duration:number = 1000;

  


  constructor( private router: Router){

  }


  ngOnInit(): void {
  }



  redirectForm(): void {
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(["/inicio"], { fragment: "formulario" }).finally(() => {
        this.router.onSameUrlNavigation = "ignore"; // Restore config after navigation completes
    });
  }
  


}
