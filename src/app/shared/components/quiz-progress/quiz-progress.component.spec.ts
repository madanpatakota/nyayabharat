import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizProgressComponent } from './quiz-progress.component';

describe('QuizProgressComponent', () => {
  let component: QuizProgressComponent;
  let fixture: ComponentFixture<QuizProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizProgressComponent]
    });
    fixture = TestBed.createComponent(QuizProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
