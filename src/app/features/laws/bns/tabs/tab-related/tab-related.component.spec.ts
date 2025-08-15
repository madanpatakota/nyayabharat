import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRelatedComponent } from './tab-related.component';

describe('TabRelatedComponent', () => {
  let component: TabRelatedComponent;
  let fixture: ComponentFixture<TabRelatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabRelatedComponent]
    });
    fixture = TestBed.createComponent(TabRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
