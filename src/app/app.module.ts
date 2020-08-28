import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { PostTitleComponent } from './shared/post-title/post-title.component';
import { VoteButtonComponent } from './shared/vote-button/vote-button.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { SubmentditSideBarComponent } from './shared/submentdit-side-bar/submentdit-side-bar.component';
import { CreateSubmentditComponent } from './submentdit/create-submentdit/create-submentdit.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ListSubmentditsComponent } from './submentdit/list-submentdits/list-submentdits.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import { ViewPostComponent } from './post/view-post/view-post.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { TokenInterceptor } from './token-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    PostTitleComponent,
    VoteButtonComponent,
    SideBarComponent,
    SubmentditSideBarComponent,
    CreateSubmentditComponent,
    CreatePostComponent,
    ListSubmentditsComponent,
    ViewPostComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    EditorModule,
    NgbModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
    }

  ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
