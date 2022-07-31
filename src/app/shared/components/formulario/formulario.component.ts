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

  userForm: FormGroup;
  mostrar: boolean = true;

  email: Email;


  constructor( private fb: FormBuilder,
                private emailSvc: EmailService,
                private router: Router){

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

    this.email = this.userForm.value

    this.emailSvc.sendMail(this.email).subscribe(
      () => {

        this.showModal()

        setTimeout(() => {
          const formValueReset = {}
          window.scrollTo(0,0)
          this.userForm.reset({})
          this.userForm.clearValidators()
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
