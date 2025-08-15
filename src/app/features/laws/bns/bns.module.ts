import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BnsRoutingModule } from './bns-routing.module';
import { BnsComponent } from './bns.component';


@NgModule({
  declarations: [
    BnsComponent
  ],
  imports: [
    CommonModule,
    BnsRoutingModule
  ]
})
export class BnsModule { }
