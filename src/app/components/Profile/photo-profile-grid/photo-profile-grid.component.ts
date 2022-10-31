import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Interfaces/Post';
import { User } from 'src/app/Interfaces/User';
import { ProfileService } from 'src/app/Service/profile.service';

@Component({
  selector: 'app-photo-profile-grid',
  templateUrl: './photo-profile-grid.component.html',
  styleUrls: ['./photo-profile-grid.component.scss']
})
export class PhotoProfileGridComponent implements OnInit {
  
  @Input() user!: User;
  posts: Post[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getPostsByUserId(this.user.username)
    .subscribe(posts => {
      this.posts = posts;
    });
  }

}
