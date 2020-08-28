import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SubmentditModel } from 'src/app/submentdit/submentdit-response';
import { Router } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';
import { SubmentditService } from 'src/app/submentdit/submentdit.service';
import { throwError } from 'rxjs';
import { CreatePostPayload } from './create-post.payload';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  submentdits: Array<SubmentditModel>;

  constructor(private router: Router, private postService: PostService,
    private submentditService: SubmentditService) {
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
      submentditName: ''
    }
  }

  ngOnInit() {
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      submentditName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    this.submentditService.getAllSubmentdits().subscribe((data) => {
      this.submentdits = data;
    }, error => {
      throwError(error);
    });
  }

  createPost() {
    this.postPayload.postName = this.createPostForm.get('postName').value;
    this.postPayload.submentditName = this.createPostForm.get('submentditName').value;
    this.postPayload.url = this.createPostForm.get('url').value;
    this.postPayload.description = this.createPostForm.get('description').value;

    this.postService.createPost(this.postPayload).subscribe((data) => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }

}
