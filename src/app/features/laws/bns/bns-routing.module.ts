import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionsComponent } from './sections/sections.component';
import { SectionViewerComponent } from './section-viewer/section-viewer.component';

const routes: Routes = [
  { path: 'sections', component: SectionsComponent },
  { path: 'section/:id/:slug', component: SectionViewerComponent },
  { path: '', redirectTo: 'sections', pathMatch: 'full' } // default for /bns
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BnsRoutingModule {}
