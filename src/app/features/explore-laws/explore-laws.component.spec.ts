import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreLawsComponent } from './explore-laws.component';

describe('ExploreLawsComponent', () => {
  let component: ExploreLawsComponent;
  let fixture: ComponentFixture<ExploreLawsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreLawsComponent]
    });
    fixture = TestBed.createComponent(ExploreLawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
