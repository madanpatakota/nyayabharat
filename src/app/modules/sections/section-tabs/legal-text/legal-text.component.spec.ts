import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalTextComponent } from './legal-text.component';

describe('LegalTextComponent', () => {
  let component: LegalTextComponent;
  let fixture: ComponentFixture<LegalTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalTextComponent]
    });
    fixture = TestBed.createComponent(LegalTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
