import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpcSectionsComponent } from './sections/sections.component';
import { CpcSectionViewerComponent  } from './section-viewer/section-viewer.component';

const routes: Routes = [
  { path: 'sections', component: CpcSectionsComponent },
  { path: 'section/:id/:slug', component: CpcSectionViewerComponent  },
  { path: '', pathMatch: 'full', redirectTo: 'sections' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpcRoutingModule {}
