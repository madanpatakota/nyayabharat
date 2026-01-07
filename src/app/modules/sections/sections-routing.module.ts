import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionDetailComponent } from './section-detail/section-detail.component';

// const routes: Routes = [
//   { path: 'by-act/:actId', component: SectionListComponent },
//   { path: ':sectionId', component: SectionDetailComponent }
// ];


const routes: Routes = [
  {
    path: '',
    component: SectionListComponent
  },
  {
    path: ':sectionId',
    component: SectionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
