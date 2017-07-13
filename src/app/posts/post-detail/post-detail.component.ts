import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../shared/model/post/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input('currentPost') post: Post;

  constructor() { }

  ngOnInit() {
  }

}
