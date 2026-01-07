import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class QuizService {

  constructor(private api: ApiService) {}

  // startQuiz(situationId: number, difficulty: string) {
  //   return this.api.get(`/quiz/start/${situationId}/${difficulty}`);
  // }

  submitQuiz(attemptId: number, payload: any) {
    return this.api.post(`/quiz/submit/${attemptId}`, payload);
  }

  startQuiz(situationId: number, difficulty: string) {
  return this.api.get(`/quiz/start/${situationId}/${difficulty}`);
}

startSituationQuiz(situationId: number, difficulty: string) {
  return this.api.get(`/quiz/situation/${situationId}/${difficulty}`);
}

startSectionQuiz(sectionId: number, difficulty: string) {
  return this.api.get(`/quiz/section/${sectionId}/${difficulty}`);
}


}
