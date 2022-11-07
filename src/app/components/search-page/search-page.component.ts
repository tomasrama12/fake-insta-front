import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Interfaces/Post';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchresult: boolean = false;
  title = 'Search';

  posts: Post[] = [];
  //postimg: PostImg[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.searchresult = false;
  }
  
  getSearchedImg(searchinput: string): void {
    this.searchresult = true;
    if (searchinput == '') {
      this.postService.getArrayOfImgs().subscribe(posts => this.posts = posts);
    } else {
      this.postService.getArrayOfSearchedImgs(searchinput).subscribe(posts => this.posts = posts);
    }
  }

}
