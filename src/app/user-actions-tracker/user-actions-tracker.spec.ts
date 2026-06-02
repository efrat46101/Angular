import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActionsTracker } from './user-actions-tracker';

describe('UserActionsTracker', () => {
  let component: UserActionsTracker;
  let fixture: ComponentFixture<UserActionsTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserActionsTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserActionsTracker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
