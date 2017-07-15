import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../shared/model/post/post.model';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  @Input('post') currentPost: Post;

  submit() {
    if (this.isCreate()) {
      this.postService.createPost(this.currentPost);
    } else {
      this.postService.updatePost(this.currentPost);
    }
  }

  constructor(private postService: PostService) {
    if (!this.currentPost) {
      this.currentPost = new Post(null, '', '');
    }
  }

  getCreatePostTitle() {
    return this.isCreate() ? "Create post" : "Update post";
  }

  getUpsertButtonTitle() {
    return this.isCreate() ? "Create" : "Update";
  }

  isCreate() {
    return this.currentPost.id == null;
  }

  ngOnInit() {

  }

}
