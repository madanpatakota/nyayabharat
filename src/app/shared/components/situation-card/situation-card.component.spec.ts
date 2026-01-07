import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationCardComponent } from './situation-card.component';

describe('SituationCardComponent', () => {
  let component: SituationCardComponent;
  let fixture: ComponentFixture<SituationCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SituationCardComponent]
    });
    fixture = TestBed.createComponent(SituationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
