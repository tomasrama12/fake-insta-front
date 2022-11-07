import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Interfaces/User';
import { filter, find, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  mockFollow: boolean = true;

  private usersUrl = 'api/users';

  getUsers(){
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserById(id:string){
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  updateFollowStatus(followerId: string, followedId: string): boolean {
    this.mockFollow = !this.mockFollow;
    return this.mockFollow;
  }

  getUserByUsername(username: string){
    return this.http.get<User[]>(this.usersUrl).pipe(map((userArray:User[]) => userArray.find(user => user.username === username)));
  }

}
