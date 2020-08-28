import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { CreateSubmentditComponent } from './submentdit/create-submentdit/create-submentdit.component';
import { ListSubmentditsComponent } from './submentdit/list-submentdits/list-submentdits.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'view-post/:id', component: ViewPostComponent},
  {path: 'user-profile/:name', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'list-submentdits', component: ListSubmentditsComponent},
  {path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard]},
  {path: 'create-submentdit', component: CreateSubmentditComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
