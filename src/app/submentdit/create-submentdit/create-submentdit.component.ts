import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubmentditModel } from '../submentdit-response';
import { Router } from '@angular/router';
import { SubmentditService } from '../submentdit.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-submentdit',
  templateUrl: './create-submentdit.component.html',
  styleUrls: ['./create-submentdit.component.css']
})
export class CreateSubmentditComponent implements OnInit {
  createSubmentditForm: FormGroup;
  submentditModel: SubmentditModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private submentditService: SubmentditService) {
    this.createSubmentditForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.submentditModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createSubmentdit() {
    this.submentditModel.name = this.createSubmentditForm.get('title')
    .value;
    this.submentditModel.description = this.createSubmentditForm.get('description')
    .value;
    this.submentditService.createSubmentdit(this.submentditModel).subscribe(data => {
      this.router.navigateByUrl('/list-submentdits');
    }, error => {
      throwError(error);
    })
  }

}
