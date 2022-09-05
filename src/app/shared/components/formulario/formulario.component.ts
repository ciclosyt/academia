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

  emailValue: Email;

  


  constructor( private fb: FormBuilder,
                private emailSvc: EmailService,
                private router: Router){

        this.userForm = this.fb.group({
            nombre: [ '' ,[Validators.required, Validators.minLength(3)]],
            email: [ '',[Validators.required, Validators.email]],
            mensaje: [ '' ,[Validators.required, Validators.minLength(3)]]
        })
              
          this.emailValue = this.userForm.value
  }


  ngOnInit(): void {
  }

  get emailControl(){
    return this.userForm.get('email')?.invalid
  }



  getErrorMessage() {
    if (this.userForm.get('email')?.hasError('required')) {
      return 'Debes entrar un email válido';
    }

    return this.userForm.get('email')?.hasError('email') ? 'Email no válido' : '';
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

    this.emailValue = this.userForm.value

    this.emailSvc.sendMail(this.emailValue).subscribe(
      () => {
        this.showModal();

        setTimeout(() => {
          window.scrollTo(0,0);
          this.userForm.reset();
        }, 1500);        

      }, (error) => {

        console.error(error)

      },
      () => {
        console.log('completado');
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
