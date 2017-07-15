import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostUpdateComponent } from './posts/post-update/post-update.component';
import { PanelComponent } from './shared/component/panel/panel.component';

import { PostService } from './posts/service/post.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogHeaderComponent,
    PostListComponent,
    PostDetailComponent,
    PostUpdateComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
