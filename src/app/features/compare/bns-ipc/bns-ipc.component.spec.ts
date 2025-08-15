import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnsIpcComponent } from './bns-ipc.component';

describe('BnsIpcComponent', () => {
  let component: BnsIpcComponent;
  let fixture: ComponentFixture<BnsIpcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BnsIpcComponent]
    });
    fixture = TestBed.createComponent(BnsIpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
