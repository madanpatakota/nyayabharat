import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActListComponent } from './act-list/act-list.component';
import { ActDetailComponent } from './act-detail/act-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ActListComponent
  },
  {
    path: ':id',
    component: ActDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActsRoutingModule {}
