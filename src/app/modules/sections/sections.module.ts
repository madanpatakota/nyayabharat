import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionDetailComponent } from './section-detail/section-detail.component';
import { ExplanationComponent } from './section-tabs/explanation/explanation.component';
import { LegalTextComponent } from './section-tabs/legal-text/legal-text.component';
import { ExamplesComponent } from './section-tabs/examples/examples.component';
import { AmendmentsComponent } from './section-tabs/amendments/amendments.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SectionListComponent,
    SectionDetailComponent,
    ExplanationComponent,
    LegalTextComponent,
    ExamplesComponent,
    AmendmentsComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    SharedModule
  ]
})
export class SectionsModule { }
