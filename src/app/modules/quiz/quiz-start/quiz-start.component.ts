import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

type QuizType = 'situation' | 'section';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.scss']
})
export class QuizStartComponent implements OnInit {

  quizType!: QuizType;

  situationId?: number;
  sectionId?: number;

  title = '';
  totalQuestions = 5;
  estimatedTime = '3–4 minutes';

  difficultyLevels = [
    { key: 'easy', label: 'Easy', description: 'Basic understanding' },
    { key: 'medium', label: 'Medium', description: 'Practical clarity' },
    { key: 'hard', label: 'Hard', description: 'Exam & professional level' }
  ];

  selectedDifficulty = 'easy';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const situationId = this.route.snapshot.paramMap.get('situationId');
    const sectionId   = this.route.snapshot.paramMap.get('sectionId');

    if (situationId) {
      this.quizType = 'situation';
      this.situationId = Number(situationId);
      this.title = 'Situation Based Quiz';
      return;
    }

    if (sectionId) {
      this.quizType = 'section';
      this.sectionId = Number(sectionId);
      this.title = 'Section Based Quiz';
      return;
    }

    console.error('QuizStart: No situationId or sectionId provided');
  }

  startQuiz(): void {

    if (this.quizType === 'situation' && this.situationId) {
      this.router.navigate([
        '/quiz/play/situation',
        this.situationId,
        this.selectedDifficulty
      ]);
      return;
    }

    if (this.quizType === 'section' && this.sectionId) {
      this.router.navigate([
        '/quiz/play/section',
        this.sectionId,
        this.selectedDifficulty
      ]);
      return;
    }

    console.error('QuizStart: Invalid quiz configuration');
  }
}
