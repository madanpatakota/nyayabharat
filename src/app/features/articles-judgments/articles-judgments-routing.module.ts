import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesJudgmentsComponent } from './articles-judgments.component';

const routes: Routes = [{ path: '', component: ArticlesJudgmentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesJudgmentsRoutingModule { }
