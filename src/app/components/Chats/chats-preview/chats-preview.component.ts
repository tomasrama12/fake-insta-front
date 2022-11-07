import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChatMessageVuewComponent } from './chat-message-vuew/chat-message-vuew.component';

import { User } from 'src/app/Interfaces/User';
import { UserService } from 'src/app/Service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chats-preview',
  templateUrl: './chats-preview.component.html',
  styleUrls: ['./chats-preview.component.scss']
})
export class ChatsPreviewComponent implements OnInit {

  users: User[] = [];

  @ViewChild('hiddenElement') chat?: ChatMessageVuewComponent;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.paramMap.get('currentUserId');
    if(userId){
      this.userService.getUserById(userId).subscribe(user => user.friendsId.forEach(userFriendId => this.userService.getUserById(userFriendId).subscribe(userFriend => this.users.push(userFriend))));
    }
  }

  openChat(user: User){
    this.chat!.user = user;
    this.chat?.show();
  }

  //getCurrentUser que es por route, de ese user saco el array de friends, y dsp hago un get de user por id de esos friendsIds.

}
