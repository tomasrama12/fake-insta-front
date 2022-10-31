import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessageVuewComponent } from './chat-message-vuew.component';

describe('ChatMessageVuewComponent', () => {
  let component: ChatMessageVuewComponent;
  let fixture: ComponentFixture<ChatMessageVuewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatMessageVuewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatMessageVuewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
