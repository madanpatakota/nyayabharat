import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageAccessSectionComponent } from './language-access-section.component';

describe('LanguageAccessSectionComponent', () => {
  let component: LanguageAccessSectionComponent;
  let fixture: ComponentFixture<LanguageAccessSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageAccessSectionComponent]
    });
    fixture = TestBed.createComponent(LanguageAccessSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
