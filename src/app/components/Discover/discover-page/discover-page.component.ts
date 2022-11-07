import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Interfaces/Post';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.scss']
})
export class DiscoverPageComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    this.postsService.getArrayOfImgs()
    .subscribe(posts => {
      this.posts = posts;
    });
  }

}
