import { Component } from '@angular/core';

@Component({
  selector: 'shw-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbarOpen = false;

  constructor() { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
