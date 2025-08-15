import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './core/layout/shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,                // navbar + footer wrapper
    children: [
      { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
      { path: 'explore', loadChildren: () => import('./features/explore-laws/explore-laws.module').then(m => m.ExploreLawsModule) },
      { path: 'smart', loadChildren: () => import('./features/smart-browsing/smart-browsing.module').then(m => m.SmartBrowsingModule) },
      { path: 'learn', loadChildren: () => import('./features/learn-law/learn-law.module').then(m => m.LearnLawModule) },
      { path: 'assistance', loadChildren: () => import('./features/legal-assistance/legal-assistance.module').then(m => m.LegalAssistanceModule) },
      { path: 'articles', loadChildren: () => import('./features/articles-judgments/articles-judgments.module').then(m => m.ArticlesJudgmentsModule) },
      { path: 'saved', loadChildren: () => import('./features/saved/saved.module').then(m => m.SavedModule) },
      { path: 'bns', loadChildren: () => import('./features/laws/bns/bns.module').then(m => m.BnsModule) }
    ]
  },
  { path: '**', redirectTo: '' }              // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
