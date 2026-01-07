import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeroSectionComponent } from './pages/home/hero-section/hero-section.component';
import { EntryPathsSectionComponent } from './pages/home/entry-paths-section/entry-paths-section.component';
import { ActsPreviewSectionComponent } from './pages/home/acts-preview-section/acts-preview-section.component';
import { WhyNyayabharatSectionComponent } from './pages/home/why-nyayabharat-section/why-nyayabharat-section.component';
import { AudienceSectionComponent } from './pages/home/audience-section/audience-section.component';
import { LanguageAccessSectionComponent } from './pages/home/language-access-section/language-access-section.component';
import { SituationsPreviewSectionComponent } from './pages/home/situations-preview-section/situations-preview-section.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    AppLayoutComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    HeroSectionComponent,
    EntryPathsSectionComponent,
    ActsPreviewSectionComponent,
    WhyNyayabharatSectionComponent,
    AudienceSectionComponent,
    LanguageAccessSectionComponent,
    SituationsPreviewSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
  }
]
,
  bootstrap: [AppComponent]
})
export class AppModule { }
