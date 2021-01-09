import { createAction, props } from '@ngrx/store';
import { UserEntity } from './../../models';
import { UserLogin } from './../../models/user-entity.model';

export const getUserInfo = createAction(
  '[Global Header] Get username',
);
export const getUserInfoSuccess = createAction(
  '[getUserInfo Effect] GET_USER_DATA_SUCCESS',
  props<{ user: UserEntity }>()
);
export const getUserInfoError = createAction(
  '[getUserInfo Effect] GET_USER_DATA_ERROR',
  props<{ error: Error | string }>()
);

export const userLogin = createAction(
  '[Login Page] Login user',
  props<{ userLogin: UserLogin }>()
);
export const userLoginSuccess = createAction(
  '[userLogin Effect] LOGIN_USER_SUCCESS',
);
export const userLoginError = createAction(
  '[userLogin Effect] LOGIN_USER_ERROR',
  props<{ error: Error | string }>()
);

export const userLogout = createAction(
  '[Global Header] Logout user',
);
export const userLogoutSuccess = createAction(
  '[userLogout Effect] LOGOUT_USER_SUCCESS',
);
export const userLogoutError = createAction(
  '[userLogout Effect] LOGOUT_USER_ERROR',
  props<{ error: Error | string }>()
);