import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
open = false;
  toggle(){ this.open = !this.open; }
  close(){ this.open = false; }
}
