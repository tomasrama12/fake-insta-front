import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Interfaces/Post';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  private imgsUrl = 'api/posts';

  getArrayOfImgs(): Observable<Post[]> {
    return this.http.get<Post[]>(this.imgsUrl);
  }
  getArrayOfSearchedImgs(value: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.imgsUrl + `?tags=${value}`);
  }
}
