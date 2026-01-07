import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPlayComponent } from './quiz-play.component';

describe('QuizPlayComponent', () => {
  let component: QuizPlayComponent;
  let fixture: ComponentFixture<QuizPlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizPlayComponent]
    });
    fixture = TestBed.createComponent(QuizPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
