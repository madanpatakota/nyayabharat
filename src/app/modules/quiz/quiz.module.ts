import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizStartComponent } from './quiz-start/quiz-start.component';
import { QuizPlayComponent } from './quiz-play/quiz-play.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizHomeComponent } from './quiz-home/quiz-home.component';


@NgModule({
  declarations: [
    QuizStartComponent,
    QuizPlayComponent,
    QuizResultComponent,
    QuizHomeComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class QuizModule { }
