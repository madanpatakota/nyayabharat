import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabExamplesComponent } from './tab-examples.component';

describe('TabExamplesComponent', () => {
  let component: TabExamplesComponent;
  let fixture: ComponentFixture<TabExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabExamplesComponent]
    });
    fixture = TestBed.createComponent(TabExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
