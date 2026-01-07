import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-situations-preview-section',
  templateUrl: './situations-preview-section.component.html',
  styleUrls: ['./situations-preview-section.component.scss']
})
export class SituationsPreviewSectionComponent {

  // situations = [
  //   { title: 'Police checking at night' },
  //   { title: 'Neighbour threatening during argument' },
  //   { title: 'Online abuse on social media' },
  //   { title: 'Workplace harassment' },
  //   { title: 'Landlord forcing eviction' },
  //   { title: 'Road rage and threats' }
  // ];

  @Input() situations: any[] = [];
  @Input() loading = false;

}
