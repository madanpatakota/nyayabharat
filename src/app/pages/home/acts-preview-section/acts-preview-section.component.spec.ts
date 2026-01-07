import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActsPreviewSectionComponent } from './acts-preview-section.component';

describe('ActsPreviewSectionComponent', () => {
  let component: ActsPreviewSectionComponent;
  let fixture: ComponentFixture<ActsPreviewSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActsPreviewSectionComponent]
    });
    fixture = TestBed.createComponent(ActsPreviewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
