import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BnsComponent } from './bns.component';

const routes: Routes = [{ path: '', component: BnsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BnsRoutingModule { }
