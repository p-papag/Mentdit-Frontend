import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupRequestPayload } from './signup-request.payload';
import {AuthService} from '../shared/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupRequestPayLoad: SignupRequestPayload;
  
  constructor(private authService: AuthService, private router: Router,
    private toastr: ToastrService) { 
    this.signupRequestPayLoad = {
      username: '',
      email: '',
      password: ''
    }
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  signup(){
    this.signupRequestPayLoad.email = this.signupForm.get('email').value;
    this.signupRequestPayLoad.username = this.signupForm.get('username').value;
    this.signupRequestPayLoad.password = this.signupForm.get('password').value;

    this.authService.signup(this.signupRequestPayLoad)
      .subscribe(data => {
        this.router.navigate(['/login'],
          { queryParams: { registered: 'true' } });
      }, error => {
        console.log(error);
        this.toastr.error('Registration Failed! Please try again');
      });
  }

}
