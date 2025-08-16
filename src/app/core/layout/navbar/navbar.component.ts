import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  open = false;      // mobile drawer
  openMega = false;  // desktop "Explore" mega dropdown

  isExplore = false;
  toggle() { this.open = !this.open; }
  close()  { this.open = false; }


  constructor(private router: Router) {
  this.router.events.subscribe(() => {
    this.isExplore = this.router.url.startsWith('/explore');
  });
}
  
toggleMega(open: boolean){
  if (this.isExplore) { this.openMega = false; return; }
  this.openMega = open;
}

openExplore = false;

toggleExplore() {
  this.openExplore = !this.openExplore;
}


}
