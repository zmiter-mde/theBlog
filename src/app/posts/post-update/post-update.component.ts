import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {
  createPostTitle = "Create post";

  submit() {
    console.log("Post created");
  }

  constructor() { }

  ngOnInit() {
  }

}
