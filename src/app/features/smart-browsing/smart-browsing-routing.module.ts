import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartBrowsingComponent } from './smart-browsing.component';

const routes: Routes = [{ path: '', component: SmartBrowsingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartBrowsingRoutingModule { }
