import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActsRoutingModule } from './acts-routing.module';
import { ActListComponent } from './act-list/act-list.component';
import { ActDetailComponent } from './act-detail/act-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ActListComponent,
    ActDetailComponent
  ],
  imports: [
    CommonModule,
    ActsRoutingModule,
    SharedModule
  ]
})
export class ActsModule { }
