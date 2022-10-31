import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Interfaces/Post';
import { ImageService } from 'src/app/Service/image.service';

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
  constructor(private discoverImgsService: ImageService) { }

  ngOnInit(): void {
    this.searchresult = false;
  }
  
  getSearchedImg(searchinput: string): void {
    this.searchresult = true;
    if (searchinput == '') {
      this.discoverImgsService.getArrayOfImgs().subscribe(posts => this.posts = posts);
    } else {
      this.discoverImgsService.getArrayOfSearchedImgs(searchinput).subscribe(posts => this.posts = posts);
    }
  }

}
