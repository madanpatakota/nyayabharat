import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalAssistanceRoutingModule } from './legal-assistance-routing.module';
import { LegalAssistanceComponent } from './legal-assistance.component';


@NgModule({
  declarations: [
    LegalAssistanceComponent
  ],
  imports: [
    CommonModule,
    LegalAssistanceRoutingModule
  ]
})
export class LegalAssistanceModule { }
