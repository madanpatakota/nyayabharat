import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/core/services/quiz.service';

@Component({
  selector: 'app-quiz-play',
  templateUrl: './quiz-play.component.html',
  styleUrls: ['./quiz-play.component.scss']
})
export class QuizPlayComponent implements OnInit {

  quizType!: 'situation' | 'section';
  entityId!: number;
  difficulty!: string;

  currentIndex = 0;
  selectedOptionId: number | null = null;


  actShortName = '';
actName = '';

// questions: any[] = [];
// answers: { [key: number]: number } = {};



  questions: any[] = [];
  answers: { [questionId: number]: number } = {};

  attemptId!: number; // 🔴 REQUIRED for submit

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    public router: Router
  ) {}

  ngOnInit(): void {

    this.difficulty =
      this.route.snapshot.paramMap.get('difficulty') || 'easy';

    // ✅ Determine quiz type + id from route
    if (this.route.snapshot.paramMap.has('situationId')) {
      this.quizType = 'situation';
      this.entityId = Number(
        this.route.snapshot.paramMap.get('situationId')
      );
    }
    else if (this.route.snapshot.paramMap.has('sectionId')) {
      this.quizType = 'section';
      this.entityId = Number(
        this.route.snapshot.paramMap.get('sectionId')
      );
    }
    else {
      console.error('Invalid quiz route');
      return;
    }

    this.loadQuestions();
  }

  private loadQuestions(): void {

    const api$ =
      this.quizType === 'situation'
        ? this.quizService.startSituationQuiz(this.entityId, this.difficulty)
        : this.quizService.startSectionQuiz(this.entityId, this.difficulty);

    api$.subscribe({
      next: (res: any) => {
  console.log('QUIZ API RESPONSE', res);
 console.log('QUIZ API RESPONSE', res);

  // 1️⃣ Questions (from wrapper)
  this.questions = Array.isArray(res?.Data.questions) ? res.Data.questions : [];

  // 2️⃣ Act info (optional – safe)
  this.actShortName = res?.Data.ActShortName || '';
  this.actName = res?.Data.ActName || '';

  // 3️⃣ AttemptId (optional for now)
  //this.attemptId = res?.AttemptId ?? 0;

  this.attemptId = res?.Data.attemptId;
console.log('AttemptId received:', this.attemptId);

if (!this.attemptId || this.attemptId <= 0) {
  console.error('Invalid attemptId', res);
  return;
}

},
     error: err => console.error('Quiz load failed', err)
    });
  }
get currentQuestion() {
  if (!Array.isArray(this.questions)) {
    return null;
  }

  return this.questions[this.currentIndex] ?? null;
}


  selectOption(optionId: number): void {
    this.selectedOptionId = optionId;
  }

  nextQuestion(): void {

    if (this.selectedOptionId === null) return;

    this.answers[this.currentQuestion.questionId] =
      this.selectedOptionId;

    this.selectedOptionId = null;
    this.currentIndex++;

    // ✅ Finish quiz
    if (this.currentIndex >= this.questions.length) {

      this.quizService.submitQuiz(this.attemptId, this.answers)
  .subscribe(result => {
    this.router.navigate(['/quiz/result'], {
      state: {
        result,
        questions: this.questions,
        answers: this.answers,
        actShortName: this.actShortName,
        actName: this.actName
      }
    });
  });



      // this.quizService
      //   .submitQuiz(this.attemptId, this.answers)
      //   .subscribe(result => {
      //     this.router.navigate(['/quiz/result'], {
      //       state: { result }
      //     });
      //   });
    }
  }
}
