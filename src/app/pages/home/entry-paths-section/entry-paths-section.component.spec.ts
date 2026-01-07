import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryPathsSectionComponent } from './entry-paths-section.component';

describe('EntryPathsSectionComponent', () => {
  let component: EntryPathsSectionComponent;
  let fixture: ComponentFixture<EntryPathsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntryPathsSectionComponent]
    });
    fixture = TestBed.createComponent(EntryPathsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
