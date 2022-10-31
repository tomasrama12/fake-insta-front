import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Interfaces/Post';
import { User } from 'src/app/Interfaces/User';
import { ProfileService } from 'src/app/Service/profile.service';

@Component({
  selector: 'app-search-page-grid',
  templateUrl: './search-page-grid.component.html',
  styleUrls: ['./search-page-grid.component.scss']
})
export class SearchPageGridComponent implements OnInit {

  @Input() posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
