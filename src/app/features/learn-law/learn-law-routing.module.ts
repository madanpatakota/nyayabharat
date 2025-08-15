import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnLawComponent } from './learn-law.component';

const routes: Routes = [{ path: '', component: LearnLawComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnLawRoutingModule { }
