import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Post } from '../Interfaces/Post';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const posts: Post[] = [
      {id: '4', userId: '1', postImg: { id: 'Dr Nice4', url: '../../assets/img2.jpg' }, tags: ['paisaje']},
      {id: '1', userId: '2', postImg: { id: 'Dr Nice1', url: '../../assets/img1.jpg' }, tags: ['perros']},
      {id: '2', userId: '3', postImg: { id: 'Dr Nice2', url: '../../assets/img3.jpg' }, tags: ['gatos']},
      {id: '3', userId: '4', postImg: { id: 'Dr Nice3', url: '../../assets/img4.jpg' }, tags: ['perros, gatos']},
    ]

    const users: User[] = [
      {id:'1', name:'user1', username:'username2', iconUrl:'../../assets/img1.jpg', city: 'San Francisco', state: 'CA', postsId: ['4', '1'], friendsId: ['2', '3']},
      {id:'2', name:'user2', username:'username3', iconUrl:'../../assets/img1.jpg', city: 'San Francisco', state: 'CA', postsId: ['2', '1'], friendsId: ['1', '3']},
      {id:'3', name:'user3', username:'username4', iconUrl:'../../assets/img1.jpg', city: 'San Francisco', state: 'CA', postsId: ['3', '1'], friendsId: ['1', '2']},
      {id:'4', name:'user4', username:'username5', iconUrl:'../../assets/img1.jpg', city: 'San Francisco', state: 'CA', postsId: ['4', '1'], friendsId: ['1', '3', '2']},
      {id:'5', name:'user5', username:'username6', iconUrl:'../../assets/img1.jpg', city: 'San Francisco', state: 'CA', postsId: ['2', '1'], friendsId: ['1', '2', '4']},
      {id:'6', name:'user6', username:'username7', iconUrl:'../../assets/img1.jpg', city: 'San Francisco', state: 'CA', postsId: ['3', '1'], friendsId: ['1', '2', '5']}
    ]
    return {posts, users};
  }

  constructor() { }
}
