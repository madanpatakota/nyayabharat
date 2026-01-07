import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SituationsRoutingModule } from './situations-routing.module';
import { SituationListComponent } from './situation-list/situation-list.component';
import { SituationDetailComponent } from './situation-detail/situation-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SituationListComponent,
    SituationDetailComponent
  ],
  imports: [
    CommonModule,
    SituationsRoutingModule,
    SharedModule
  ]
})
export class SituationsModule { }
