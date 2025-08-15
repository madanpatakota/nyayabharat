import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnLawRoutingModule } from './learn-law-routing.module';
import { LearnLawComponent } from './learn-law.component';


@NgModule({
  declarations: [
    LearnLawComponent
  ],
  imports: [
    CommonModule,
    LearnLawRoutingModule
  ]
})
export class LearnLawModule { }
