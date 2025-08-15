import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesJudgmentsComponent } from './articles-judgments.component';

describe('ArticlesJudgmentsComponent', () => {
  let component: ArticlesJudgmentsComponent;
  let fixture: ComponentFixture<ArticlesJudgmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlesJudgmentsComponent]
    });
    fixture = TestBed.createComponent(ArticlesJudgmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
