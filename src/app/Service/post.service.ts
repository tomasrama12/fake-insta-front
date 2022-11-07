import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { Post } from '../Interfaces/Post';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private imgsUrl = 'api/posts';

  getArrayOfImgs(): Observable<Post[]> {
    return this.http.get<Post[]>(this.imgsUrl);
  }
  getArrayOfSearchedImgs(value: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.imgsUrl + `?tags=${value}`);
  }

  getPostById(postId: string){
    return this.http.get<Post>(this.imgsUrl + `/${postId}`);
  }

  
}
