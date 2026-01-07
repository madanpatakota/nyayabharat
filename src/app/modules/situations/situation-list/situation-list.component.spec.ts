import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationListComponent } from './situation-list.component';

describe('SituationListComponent', () => {
  let component: SituationListComponent;
  let fixture: ComponentFixture<SituationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SituationListComponent]
    });
    fixture = TestBed.createComponent(SituationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
