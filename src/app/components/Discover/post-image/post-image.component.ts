import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PostImg } from 'src/app/Interfaces/PostImg';
import { User } from 'src/app/Interfaces/User';
import { UserService } from 'src/app/Service/user.service';
import { FullSizeImageComponent } from '../../full-size-image/full-size-image.component';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.scss']
})
export class PostImageComponent implements OnInit {

  @Input() image!: PostImg;
  @Input() userId!: string;
  user?: User;

  constructor(private usersSerice:UserService) { }

  ngOnInit(): void {
    this.getUser();
  }
  @ViewChild('hiddenElement') fullSizedImgElement!: FullSizeImageComponent;

  openImage(){
    this.fullSizedImgElement.show();
  }

  getUser(){
    this.usersSerice.getUserById(this.userId).subscribe(user => {this.user = user; console.log(this.user)});
  }

}
