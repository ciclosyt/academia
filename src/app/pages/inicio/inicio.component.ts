import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Email } from '../../shared/interface/email.interface';
import { EmailService } from '../../shared/services/email.service';

import Swal from 'sweetalert2';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  userForm: FormGroup;
  mostrar: boolean = true;

  email: Email;

  informacion: any;

  constructor( private fb: FormBuilder,
                private emailSvc: EmailService,
                private router: Router ) {

   this.userForm = this.fb.group({
      nombre: [ '' ,[Validators.required, Validators.minLength(3)]],
      email: [ '',[Validators.required, Validators.email]],
      mensaje: [ '' ,[Validators.required, Validators.minLength(3)]]
    })

    this.email = this.userForm.value

   }

  ngOnInit(): void {

     
    
    
  }

  bloqueado():any{
    if(this.userForm?.invalid){
      return 'rellene el formulario'
    } else {

      return 'enviar'

    }
  }

  showModal():void {

    Swal.fire(
      'Buen trabajo!!!',
      'Charlaremos muy pronto ;)',
      'success'
    )


  }



  submitForm(){

    console.log(this.userForm?.value);

    this.email = this.userForm.value

    this.emailSvc.sendMail(this.email).subscribe(
      () => {

        this.showModal()

        setTimeout(() => {
          window.scrollTo(0,0)
          this.userForm.reset({})
        }, 1500);

        

      }, (error) => {

        console.error(error)

      }
    )
  
  }

  redirectForm(): void {
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(["/inicio"], { fragment: "formulario" }).finally(() => {
        this.router.onSameUrlNavigation = "ignore"; // Restore config after navigation completes
    });
  }

}
