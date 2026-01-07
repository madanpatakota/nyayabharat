import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {

  // ===== SUMMARY =====
  sectionTitle = '';
  totalQuestions = 0;
  correctAnswers = 0;
  score = 0;
  sectionId!: number;

  // ===== ACT BADGE =====
  actShortName = '';
  actName = '';

  // ===== REVIEW =====
  questions: any[] = [];
  answers: { [key: number]: number } = {};

  constructor(private router: Router) {}
ngOnInit(): void {

  const state = history.state;

  // 🔒 Safety: refresh / direct open
  if (!state || !state.result) {
    this.router.navigate(['/quiz']);
    return;
  }

  const result = state.result;

  // ===== RESULT DATA =====
  this.sectionTitle     = result.Data.sectionTitle;
  this.totalQuestions  = result.Data.totalQuestions;
  this.correctAnswers  = result.Data.correctAnswers;
  this.score           = result.Data.score;
  this.sectionId       = result.Data.sectionId;
  // ===== REVIEW DATA =====
  this.questions = state.questions || [];
  this.answers   = state.answers || {};

  // ===== ACT BADGE =====
  this.actShortName = state.actShortName || '';
  this.actName      = state.actName || '';
}


  get scorePercent(): number {
    return this.score;
  }

  // ===== REVIEW HELPERS =====
  isCorrect(q: any): boolean {
    const selected = this.answers[q.questionId];
    const correct = q.options.find((o: any) => o.isCorrect);
    return selected === correct?.optionId;
  }

  // ===== ACTIONS =====
  retryQuiz() {
    this.router.navigate(['/quiz/play/section', this.sectionId, 'easy']);
  }

  goToSection() {
    this.router.navigate(['/sections', this.sectionId]);
  }

  goToSituations() {
    this.router.navigate(['/situations']);
  }
}
