import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPunishmentComponent } from './tab-punishment.component';

describe('TabPunishmentComponent', () => {
  let component: TabPunishmentComponent;
  let fixture: ComponentFixture<TabPunishmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabPunishmentComponent]
    });
    fixture = TestBed.createComponent(TabPunishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
