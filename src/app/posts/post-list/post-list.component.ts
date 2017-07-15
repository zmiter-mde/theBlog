import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/model/post/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [
    new Post('First!', 'This is my 1st blog!'),
    new Post('Second', 'I am m bored with 2nd post')
  ];

  currentPost: Post;

  constructor() {
    this.currentPost = this.posts[0];
  }

  setCurrentPost(post: Post) {
    this.currentPost = post;
  }

  ngOnInit() {
  }

}