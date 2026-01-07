import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ultra-info-card',
  templateUrl: './ultra-info-card.component.html',
  styleUrls: ['./ultra-info-card.component.scss']
})
export class UltraInfoCardComponent {
  @Input() icon = '⚖️';
  @Input() title = '';
  @Input() description = '';
}
