import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartBrowsingComponent } from './smart-browsing.component';

describe('SmartBrowsingComponent', () => {
  let component: SmartBrowsingComponent;
  let fixture: ComponentFixture<SmartBrowsingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartBrowsingComponent]
    });
    fixture = TestBed.createComponent(SmartBrowsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
