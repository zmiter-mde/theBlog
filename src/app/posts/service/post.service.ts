import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { Post } from '../../shared/model/post/post.model';

@Injectable()
export class PostService {

  // TODO: Move to some resource file or fetch from server
  url : string = 'https://zmiter.pythonanywhere.com/theBlog/api/v1.0/';

  constructor(private http: Http) { }

  getPosts() {
    return this.http
               .get(this.url + 'posts')
               .map((res:Response) => res.json());
  }

  createPost(post: Post) {
    // TODO: Call post creation
    console.log('Post created!');
  }

  updatePost(post: Post) {
    // TODO: Call post update
    console.log('Post updated!');
  }

}
