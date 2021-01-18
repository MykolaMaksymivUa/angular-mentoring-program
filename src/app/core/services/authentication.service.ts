import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { LocalStorageService } from './local-storage.service';
import { UserEntity, UserToken, UserLogin } from '../models';
import { Constants, CONSTANT_LIST } from './../../shared/tokens/constant.config';

import { map, tap, share, retry, pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly storageKey: string = this.constants.userTokenStorageKey;
  isAuthenticated = false;
  redirectUrl: string;
  userToken: UserToken;

  constructor(
    @Inject(CONSTANT_LIST) private constants: Constants,
    private ls: LocalStorageService,
    private http: HttpClient,
  ) {
    this.userToken = this.ls.getItem(this.storageKey);
    this.isAuthenticated = !!this.userToken?.token;
  }

  login(login: string, password: string): Observable<UserToken> {
    if (this.isAuthenticated) {
      return;
    }

    const body: UserLogin = { login: login, password: password };

    return this.http
      .post(this.constants.loginEndpoint, body)
      .pipe(
        share(),
        tap((token: UserToken) => {
          if (token) {
            this.userToken = token;
            this.isAuthenticated = true;

            this.ls.setItem(this.storageKey, token);
          }
        }),
      );
  }

  logout() {
    this.isAuthenticated = false;
    this.ls.removeItem(this.storageKey);
  }

  getUserInfo(): Observable<string> {
    return this.http.post<UserEntity>(this.constants.userInfoEndpoint, this.userToken)
      .pipe(
        retry(1),
        share(),
        pluck('name'),
        map((user: UserEntity) => `${user.firstName} ${user.lastName}`),
      );
  }
}
