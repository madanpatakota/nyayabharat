import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalAssistanceComponent } from './legal-assistance.component';

const routes: Routes = [{ path: '', component: LegalAssistanceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalAssistanceRoutingModule { }
