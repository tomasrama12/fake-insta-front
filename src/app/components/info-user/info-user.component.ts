import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {
  
  @Input() userId!: string;
  @Input() isDarkMode?: boolean;
  user?: User;

  get colorScheme(): 'light' | 'dark' {
    return this.isDarkMode ? 'dark' : 'light';
  }

  constructor(private usersService:UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.usersService.getUserById(this.userId).subscribe(user => {this.user = user; console.log('user info' + user)});
  }

}
