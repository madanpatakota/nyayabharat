import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersRoutingModule } from './chapters-routing.module';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ChapterListComponent
  ],
  imports: [
    CommonModule,
    ChaptersRoutingModule,
    SharedModule
  ]
})
export class ChaptersModule { }
