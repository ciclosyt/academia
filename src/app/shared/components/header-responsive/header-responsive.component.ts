import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-responsive',
  templateUrl: './header-responsive.component.html',
  styleUrls: ['./header-responsive.component.scss']
})
export class HeaderResponsiveComponent implements OnInit {

  mostrarMenu: boolean = false;

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.mostrarMenu = !this.mostrarMenu;
  }

  redirectForm(): void {
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(["/inicio"], { fragment: "formulario" }).finally(() => {
        this.router.onSameUrlNavigation = "ignore"; // Restore config after navigation completes
    });
  }
}
