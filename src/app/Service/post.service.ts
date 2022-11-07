import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { Post } from '../Interfaces/Post';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  private imgsUrl = 'http://localhost:3000/api/v1/posts';

  getArrayOfImgs(): Observable<any> {
    return this.http.get<any>(this.imgsUrl);
  }
  getArrayOfSearchedImgs(value: string): Observable<any> {
    return this.http.get<any>(this.imgsUrl + `?tags=${value}`);
  }

  getPostById(postId: string){
    return this.http.get<any>(this.imgsUrl + `/${postId}`);
  }

  createPost(post:Post){
    return this.http.post<any>(this.imgsUrl, post, this.httpOptions);
  }

  
}
