import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnLawComponent } from './learn-law.component';

describe('LearnLawComponent', () => {
  let component: LearnLawComponent;
  let fixture: ComponentFixture<LearnLawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnLawComponent]
    });
    fixture = TestBed.createComponent(LearnLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
