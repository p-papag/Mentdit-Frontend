import { Component, OnInit } from '@angular/core';
import { PostService} from '../post.service';
import { PostModel } from '../post-model';
import {faComments} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css']
})
export class PostTitleComponent implements OnInit {
  
  faComments = faComments;
  posts: Array<PostModel>;
  
  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    });
   }

  ngOnInit(): void {
  }

}
