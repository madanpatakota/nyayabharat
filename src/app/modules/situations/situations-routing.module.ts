import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SituationListComponent } from './situation-list/situation-list.component';
import { SituationDetailComponent } from './situation-detail/situation-detail.component';


const routes: Routes = [
  { path: '', component: SituationListComponent },
  { path: ':id', component: SituationDetailComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SituationsRoutingModule { }
