import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesJudgmentsRoutingModule } from './articles-judgments-routing.module';
import { ArticlesJudgmentsComponent } from './articles-judgments.component';


@NgModule({
  declarations: [
    ArticlesJudgmentsComponent
  ],
  imports: [
    CommonModule,
    ArticlesJudgmentsRoutingModule
  ]
})
export class ArticlesJudgmentsModule { }
