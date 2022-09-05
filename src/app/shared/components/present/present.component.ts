import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumnos } from '../../interface/alumnos.interface';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.scss']
})
export class PresentComponent implements OnInit {

  @Input() alumnos!: Alumnos;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  redirectForm(): void {
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(["/inicio"], { fragment: "formulario" }).finally(() => {
        this.router.onSameUrlNavigation = "ignore"; // Restore config after navigation completes
    });
  }
}
