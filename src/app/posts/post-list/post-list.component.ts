import { Component, OnInit } from '@angular/core';

import { Post } from '../../shared/model/post/post.model';

import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  currentPost: Post = new Post(null, '', '');

  constructor(private postService: PostService) {
    postService.getPosts().subscribe(
      result => {
        this.posts = result.posts;
        this.setCurrentPost(this.posts[0]);
      },
      err => {
        console.log(err);
      });
  }

  setCurrentPost(post: Post) {
    this.currentPost = post;
  }

  getPosts() {
    return this.posts;
  }

  ngOnInit() {
  }

}
