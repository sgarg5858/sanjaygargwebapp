import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskUserConfirmationComponent } from './ask-user-confirmation.component';

describe('AskUserConfirmationComponent', () => {
  let component: AskUserConfirmationComponent;
  let fixture: ComponentFixture<AskUserConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskUserConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskUserConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
