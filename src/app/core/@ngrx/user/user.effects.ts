import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as UserActions from './user.actions';
import * as RouterActions from '../router/router.actions';

import { Observable, of } from 'rxjs';
import { catchError, map, pluck, switchMap, concatMap } from 'rxjs/operators';

import { AuthenticationService } from '../../services';
import { UserLogin, UserEntity } from './../../models/user-entity.model';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService
  ) { }

  login$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.userLogin),
      pluck('userLogin'),
      switchMap((data: UserLogin) => this.authService.login(data.login, data.password)
        .pipe(
          map(token => UserActions.userLoginSuccess()),
          catchError(error => of(UserActions.userLoginError({ error })))
        )
      )
    );
  });

  logout$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.userLogout),
      map(() => {
        this.authService.logout();

        return UserActions.userLogoutSuccess();
      })
    );
  });

  getUserInfo$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.getUserInfo),
      switchMap(() => this.authService.getUserInfo()
        .pipe(
          map((user: UserEntity) => UserActions.getUserInfoSuccess({ user })),
          catchError(error => of(UserActions.getUserInfoError({ error })))
        )
      )
    );
  });

  loginLogoutUserSuccess$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.userLoginSuccess, UserActions.userLogoutSuccess),
      map(action => {
        const isLogoutAction = action.type.toLowerCase().includes('logout');

        return isLogoutAction ? RouterActions.go({ path: ['login'] }) : RouterActions.goHome();
      })
    );
  });
}
