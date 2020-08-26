import { Component, OnInit } from '@angular/core';
import { PostService} from '../post.service';
import { PostModel } from '../post-model';
import {faComments} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css']
})
export class PostTitleComponent implements OnInit {
  
  faComments = faComments;
  posts: Array<PostModel>;
  
  constructor(private router : Router) {
   
   }

  ngOnInit(): void {
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }

}
