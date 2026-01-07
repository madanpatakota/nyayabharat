import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationsPreviewSectionComponent } from './situations-preview-section.component';

describe('SituationsPreviewSectionComponent', () => {
  let component: SituationsPreviewSectionComponent;
  let fixture: ComponentFixture<SituationsPreviewSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SituationsPreviewSectionComponent]
    });
    fixture = TestBed.createComponent(SituationsPreviewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
