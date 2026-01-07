import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyNyayabharatSectionComponent } from './why-nyayabharat-section.component';

describe('WhyNyayabharatSectionComponent', () => {
  let component: WhyNyayabharatSectionComponent;
  let fixture: ComponentFixture<WhyNyayabharatSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyNyayabharatSectionComponent]
    });
    fixture = TestBed.createComponent(WhyNyayabharatSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
