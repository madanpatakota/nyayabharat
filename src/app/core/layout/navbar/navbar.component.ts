import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  open = false;      // mobile drawer
  openMega = false;  // desktop "Explore" mega dropdown

  toggle() { this.open = !this.open; }
  close()  { this.open = false; }

  toggleMega(state: boolean) {
  this.openMega = state;
}

}
