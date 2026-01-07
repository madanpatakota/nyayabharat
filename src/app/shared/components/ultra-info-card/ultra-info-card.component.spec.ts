import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraInfoCardComponent } from './ultra-info-card.component';

describe('UltraInfoCardComponent', () => {
  let component: UltraInfoCardComponent;
  let fixture: ComponentFixture<UltraInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltraInfoCardComponent]
    });
    fixture = TestBed.createComponent(UltraInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
