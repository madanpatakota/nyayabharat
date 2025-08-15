import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabHistoryComponent } from './tab-history.component';

describe('TabHistoryComponent', () => {
  let component: TabHistoryComponent;
  let fixture: ComponentFixture<TabHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabHistoryComponent]
    });
    fixture = TestBed.createComponent(TabHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
