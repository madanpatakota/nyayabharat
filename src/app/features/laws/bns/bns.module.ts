import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BnsRoutingModule } from './bns-routing.module';
import { BnsComponent } from './bns.component';
import { SectionsComponent } from './sections/sections.component';
import { SectionViewerComponent } from './section-viewer/section-viewer.component';
import { TabOverviewComponent } from './tabs/tab-overview/tab-overview.component';
import { TabPunishmentComponent } from './tabs/tab-punishment/tab-punishment.component';
import { TabExamplesComponent } from './tabs/tab-examples/tab-examples.component';
import { TabHistoryComponent } from './tabs/tab-history/tab-history.component';
import { TabJudgmentsComponent } from './tabs/tab-judgments/tab-judgments.component';
import { TabRelatedComponent } from './tabs/tab-related/tab-related.component';
import { TabCrosswalkComponent } from './tabs/tab-crosswalk/tab-crosswalk.component';
import { SectionToolbarComponent } from './partials/section-toolbar/section-toolbar.component';


@NgModule({
  declarations: [
    BnsComponent,
    SectionsComponent,
    SectionViewerComponent,
    TabOverviewComponent,
    TabPunishmentComponent,
    TabExamplesComponent,
    TabHistoryComponent,
    TabJudgmentsComponent,
    TabRelatedComponent,
    TabCrosswalkComponent,
    SectionToolbarComponent
  ],
  imports: [
    CommonModule,
    BnsRoutingModule
  ]
})
export class BnsModule { }
