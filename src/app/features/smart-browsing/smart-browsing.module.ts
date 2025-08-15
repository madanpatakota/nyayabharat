import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartBrowsingRoutingModule } from './smart-browsing-routing.module';
import { SmartBrowsingComponent } from './smart-browsing.component';


@NgModule({
  declarations: [
    SmartBrowsingComponent
  ],
  imports: [
    CommonModule,
    SmartBrowsingRoutingModule
  ]
})
export class SmartBrowsingModule { }
