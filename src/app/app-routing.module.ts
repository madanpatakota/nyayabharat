import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [

  /* =======================
     PUBLIC AREA (NO LOGIN)
     ======================= */
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },

      {
        path: 'acts',
        loadChildren: () =>
          import('./modules/acts/acts.module').then(m => m.ActsModule)
      },
      {
        path: 'situations',
        loadChildren: () =>
          import('./modules/situations/situations.module').then(m => m.SituationsModule)
      },
      {
        path: 'sections',
        loadChildren: () =>
          import('./modules/sections/sections.module').then(m => m.SectionsModule)
      },
      /* ✅ QUIZ IS PUBLIC */
      {
        path: 'quiz',
        loadChildren: () =>
          import('./modules/quiz/quiz.module').then(m => m.QuizModule)
      },
      {
    path: 'chapters',
    loadChildren: () =>
      import('./modules/chapters/chapters.module').then(m => m.ChaptersModule)
  },
    ]
  },

  /* =======================
     AUTHENTICATED AREA
     ======================= */
  {
    path: 'app',
    component: AppLayoutComponent,
    //canActivate: [AuthGuard],  Important here .
    children: [
      // {
      //   path: 'quiz',
      //   loadChildren: () =>
      //     import('./modules/quiz/quiz.module').then(m => m.QuizModule)
      // },
      {
        path: 'user',
        loadChildren: () =>
          import('./modules/user/user.module').then(m => m.UserModule)
      }
    ]
  },

  /* =======================
     AUTH MODULE
     ======================= */
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  },

  /* =======================
     FALLBACK
     ======================= */
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
