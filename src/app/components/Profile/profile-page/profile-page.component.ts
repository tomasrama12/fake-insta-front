import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Interfaces/User';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user?: User;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.paramMap.get('id');
    if (username) {
      console.log(username + ' xd');
      this.userService.getUserById(username).subscribe(user => {this.user = user; console.log(this.user + 'algo')});
    }else{
      console.log('que raro');
    }
  }

}
