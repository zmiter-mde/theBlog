import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { Post } from '../../shared/model/post/post.model';

@Injectable()
export class PostService {

  url : string = 'https://zmiter.pythonanywhere.com/theBlog/api/v1.0/';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url + 'posts').map((res:Response) => res.json());
  }

}
