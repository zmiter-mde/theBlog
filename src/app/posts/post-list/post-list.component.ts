import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { Post } from '../../shared/model/post/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  url : string = 'https://zmiter.pythonanywhere.com/theBlog/api/v1.0/posts';

  posts: Post[] = [
    new Post('First!', 'This is my 1st blog!'),
    new Post('Second', 'I am m bored with 2nd post')
  ];

  currentPost: Post;

  constructor(private http: Http) {
    this.currentPost = this.posts[0];
    this.getPosts();
  }

  setCurrentPost(post: Post) {
    this.currentPost = post;
  }

  getPosts() {
    return this.http.get(this.url).map((res:Response) => res.json()).subscribe(
                               result => {
                                 this.posts = result.posts;
                               },
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
  }

  ngOnInit() {
  }

}
