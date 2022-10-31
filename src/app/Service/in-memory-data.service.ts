import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Post } from '../Interfaces/Post';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const posts: Post[] = [
      {id: '1', user: {name:'user2', username:'username2', iconUrl:'../../assets/img1.jpg', city: 'San Francisco', state: 'CA'}, postImg: { id: 'Dr Nice1', url: '../../assets/img1.jpg' }, tags: ['perros']},
      {id: '4', user: {name:'user5', username:'username5', iconUrl:'../../assets/img2.jpg', city: 'San Francisco', state: 'CA'}, postImg: { id: 'Dr Nice4', url: '../../assets/img2.jpg' }, tags: ['paisaje']},
      {id: '2', user: {name:'user3', username:'username3', iconUrl:'../../assets/img3.jpg', city: 'San Francisco', state: 'CA'}, postImg: { id: 'Dr Nice2', url: '../../assets/img3.jpg' }, tags: ['gatos']},
      {id: '3', user: {name:'user4', username:'username4', iconUrl:'../../assets/img4.jpg', city: 'San Francisco', state: 'CA'}, postImg: { id: 'Dr Nice3', url: '../../assets/img4.jpg' }, tags: ['perros, gatos']},
    ]
    return {posts};
  }

  constructor() { }
}
