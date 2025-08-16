import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CpcRoutingModule } from './cpc-routing.module';
import { CpcSectionsComponent } from './sections/sections.component';
import { CpcSectionViewerComponent  } from './section-viewer/section-viewer.component';

@NgModule({
  declarations: [CpcSectionsComponent, CpcSectionViewerComponent ],
  imports: [CommonModule, RouterModule, CpcRoutingModule]
})
export class CpcModule {}
