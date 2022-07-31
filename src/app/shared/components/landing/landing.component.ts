import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {



  constructor( private router: Router) {       }

  ngOnInit(): void {

  }

  redirectForm(): void {
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(["/inicio"], { fragment: "formulario" }).finally(() => {
        this.router.onSameUrlNavigation = "ignore"; // Restore config after navigation completes
    });
  }

  redirectAcademy(): void {
    this.router.navigate(["/servicios"]);
  }

}
