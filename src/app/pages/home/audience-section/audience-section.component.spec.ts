import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceSectionComponent } from './audience-section.component';

describe('AudienceSectionComponent', () => {
  let component: AudienceSectionComponent;
  let fixture: ComponentFixture<AudienceSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudienceSectionComponent]
    });
    fixture = TestBed.createComponent(AudienceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
