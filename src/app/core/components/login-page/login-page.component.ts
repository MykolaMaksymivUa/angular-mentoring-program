import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { AuthenticationService } from '../../services';
import { UserLogin } from '../../models';
import { Store } from '@ngrx/store';
import * as UserActions from '../../@ngrx/user/user.actions';

@Component({
  selector: 'wb-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    const userLogin: UserLogin = {
      login: form.value.login,
      password: form.value.password,
    }
    this.store.dispatch(UserActions.userLogin({ userLogin }));
  }
}
