import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/core/services';
import { Store } from '@ngrx/store';
import * as UserActions from '../../../@ngrx/user/user.actions';
import { selectUsername, selectUserIsAuthenticated } from 'src/app/core/@ngrx/user';
@Component({
  selector: 'wb-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less'],
})
export class AccountComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  username$: Observable<string>;

  constructor(
    public authService: AuthenticationService,
    private store: Store,
  ) {
    this.isAuthenticated$ = this.store.select(selectUserIsAuthenticated);
    this.username$ = this.store.select(selectUsername);
    this.authService.isAuthenticated && this.store.dispatch(UserActions.getUserInfo());
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.store.dispatch(UserActions.userLogout());
  }
}
