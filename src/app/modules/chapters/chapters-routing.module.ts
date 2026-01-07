import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChapterListComponent } from 'src/app/modules/chapters/chapter-list/chapter-list.component';

const routes: Routes = [
  {
    path: '',
    component: ChapterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChaptersRoutingModule {}
