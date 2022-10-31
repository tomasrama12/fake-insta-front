import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ImageService } from 'src/app/Service/image.service';
import { ChatMessageVuewComponent } from './chat-message-vuew/chat-message-vuew.component';

import { User } from 'src/app/Interfaces/User';

@Component({
  selector: 'app-chats-preview',
  templateUrl: './chats-preview.component.html',
  styleUrls: ['./chats-preview.component.scss']
})
export class ChatsPreviewComponent implements OnInit {

  users: User[] = [];

  @ViewChild('hiddenElement') chat?: ChatMessageVuewComponent;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getArrayOfImgs()
    .subscribe(posts => {
      for(let post of posts){
        this.users.push(post.user);
      }
    });
  }

  openChat(user: User){
    this.chat!.user = user;
    this.chat?.show();
  }

}
