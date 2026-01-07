import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizHomeComponent } from './quiz-home/quiz-home.component';
import { QuizStartComponent } from './quiz-start/quiz-start.component';
import { QuizPlayComponent } from './quiz-play/quiz-play.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';

const routes: Routes = [

  {
    path: '',
    component: QuizHomeComponent
  },

  // ========================
  // QUIZ START
  // ========================

  {
    path: 'start/situation/:situationId',
    component: QuizStartComponent
  },
  {
    path: 'start/section/:sectionId',
    component: QuizStartComponent
  },

  // ========================
  // QUIZ PLAY
  // ========================

  {
    path: 'play/situation/:situationId/:difficulty',
    component: QuizPlayComponent
  },
  {
    path: 'play/section/:sectionId/:difficulty',
    component: QuizPlayComponent
  },

  // ========================
  // QUIZ RESULT
  // ========================

  {
    path: 'result',
    component: QuizResultComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule {}
