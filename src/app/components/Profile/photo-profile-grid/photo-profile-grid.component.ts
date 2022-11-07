import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Interfaces/Post';
import { User } from 'src/app/Interfaces/User';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-photo-profile-grid',
  templateUrl: './photo-profile-grid.component.html',
  styleUrls: ['./photo-profile-grid.component.scss']
})
export class PhotoProfileGridComponent implements OnInit {
  
  @Input() user!: User;
  posts: Post[] = [];

  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    let postsIds = this.user.postsId;
    postsIds.forEach(postId => this.postsService.getPostById(postId).subscribe(post => this.posts.push(post)));
  }

}
