import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SignupRequestPayload } from '../signup/signup-request.payload';
import { Observable } from 'rxjs';
import { LoginRequestPayload} from '../login/login-request.payload';
import { LocalStorageService } from 'ngx-webstorage';
import { LoginResponse } from '../login/login-response.payload';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();

  refreshToken() {
      throw new Error("Method not implemented.");
  }

  constructor(private httpClient: HttpClient,
    private localStorage: LocalStorageService) { }

  signup(signupRequestPayload : SignupRequestPayload): Observable<any>{
    return this.httpClient.post('http://localhost:8080/api/auth/signup', signupRequestPayload, {responseType: 'text'});
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<boolean> {
    return this.httpClient.post<LoginResponse>('http://localhost:8080/api/auth/login',
      loginRequestPayload).pipe(map(data => {
        this.localStorage.store('authenticationToken', data.authenticationToken);
        this.localStorage.store('username', data.username);
        this.localStorage.store('refreshToken', data.refreshToken);
        this.localStorage.store('expiresAt', data.expiresAt);

      
        return true;
      }));
  }

  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }

  getUserName() {
    return this.localStorage.retrieve('username');
  }

  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }

  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }
}
