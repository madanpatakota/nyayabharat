import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreLawsComponent } from './explore-laws.component';

const routes: Routes = [{ path: '', component: ExploreLawsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreLawsRoutingModule { }
