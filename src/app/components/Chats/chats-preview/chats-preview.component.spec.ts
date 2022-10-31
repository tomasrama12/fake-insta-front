import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsPreviewComponent } from './chats-preview.component';

describe('ChatsPreviewComponent', () => {
  let component: ChatsPreviewComponent;
  let fixture: ComponentFixture<ChatsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
