import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabJudgmentsComponent } from './tab-judgments.component';

describe('TabJudgmentsComponent', () => {
  let component: TabJudgmentsComponent;
  let fixture: ComponentFixture<TabJudgmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabJudgmentsComponent]
    });
    fixture = TestBed.createComponent(TabJudgmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
