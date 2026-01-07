import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { SectionCardComponent } from './components/section-card/section-card.component';
import { SituationCardComponent } from './components/situation-card/situation-card.component';
import { QuizProgressComponent } from './components/quiz-progress/quiz-progress.component';
import { LoadersComponent } from './components/loaders/loaders.component';
import { IconsComponent } from './components/icons/icons.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { TranslatePipe } from './pipes/translate.pipe';
import { UltraInfoCardComponent } from './components/ultra-info-card/ultra-info-card.component';
import { RouterModule } from '@angular/router';
import { BackNavComponent } from './components/back-nav/back-nav.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LanguageSwitcherComponent,
    SectionCardComponent,
    SituationCardComponent,
    QuizProgressComponent,
    LoadersComponent,
    IconsComponent,
    TruncatePipe,
    TranslatePipe,
    FooterComponent,
    UltraInfoCardComponent,
    BackNavComponent,TruncatePipe, LanguageSelectorComponent,
    LoadersComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadcrumbComponent,
    NavbarComponent,
    FooterComponent , UltraInfoCardComponent , RouterModule , BackNavComponent , TruncatePipe, LanguageSelectorComponent, LoadersComponent]
})
export class SharedModule { }
