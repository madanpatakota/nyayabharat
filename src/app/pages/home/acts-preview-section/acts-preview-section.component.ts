import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-acts-preview-section',
  templateUrl: './acts-preview-section.component.html',
  styleUrls: ['./acts-preview-section.component.scss']
})
export class ActsPreviewSectionComponent {

  // acts = [
  //   { name: 'Indian Penal Code (IPC)', short: 'IPC' },
  //   { name: 'Criminal Procedure Code (CrPC)', short: 'CrPC' },
  //   { name: 'Constitution of India', short: 'COI' },
  //   { name: 'Special & State Laws', short: 'Acts' }
  // ];

   @Input() acts: any[] = [];
   @Input() loading = false;

}
