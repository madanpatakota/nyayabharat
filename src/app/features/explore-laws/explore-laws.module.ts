import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreLawsRoutingModule } from './explore-laws-routing.module';
import { ExploreLawsComponent } from './explore-laws.component';


@NgModule({
  declarations: [
    ExploreLawsComponent
  ],
  imports: [
    CommonModule,
    ExploreLawsRoutingModule
  ]
})
export class ExploreLawsModule { }
