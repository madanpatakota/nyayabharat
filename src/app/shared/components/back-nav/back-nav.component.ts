import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-nav',
  templateUrl: './back-nav.component.html',
  styleUrls: ['./back-nav.component.scss']
})
export class BackNavComponent {

  @Input() label = 'Back';

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
