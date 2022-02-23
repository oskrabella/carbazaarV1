import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsChatBotComponent } from './cs-chat-bot.component';

describe('CsChatBotComponent', () => {
  let component: CsChatBotComponent;
  let fixture: ComponentFixture<CsChatBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsChatBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsChatBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
