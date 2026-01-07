import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  userName = 'Madan';

  stats = [
    { label: 'Sections Read', value: 12 },
    { label: 'Situations Explored', value: 7 },
    { label: 'Quizzes Taken', value: 6 },
    { label: 'Average Score', value: '78%' }
  ];

  continueLearning = {
    title: 'IPC 341 – Wrongful Restraint',
    subtitle: 'Understand personal freedom under law',
    path: '/sections/341'
  };

  recentQuiz = {
    title: 'IPC 341 Quiz',
    score: '80%',
    date: '2 days ago'
  };

}
