import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {

  @Input() user!: User;
  @Input() isFollowed: boolean = true;

  get followText(): 'Follow' | 'Unfollow' {
    return this.isFollowed ? 'Follow' : 'Unfollow';
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  updateFollowStatus() {
    this.isFollowed = this.userService.updateFollowStatus(this.user.username, this.user.username);
  }

  
}
