import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCrosswalkComponent } from './tab-crosswalk.component';

describe('TabCrosswalkComponent', () => {
  let component: TabCrosswalkComponent;
  let fixture: ComponentFixture<TabCrosswalkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabCrosswalkComponent]
    });
    fixture = TestBed.createComponent(TabCrosswalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
