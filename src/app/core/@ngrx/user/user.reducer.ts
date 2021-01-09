import { Action, createReducer, on } from '@ngrx/store';
import { UserState, initialUserState } from './user.state';
import * as UserActions from './user.actions';

export const reducer = createReducer(
  initialUserState,

  on(UserActions.userLoginSuccess, state => {
    return {
      ...state,
      isAuthenticated: true
    };
  }),

  on(UserActions.getUserInfoSuccess, (state, { user }) => {
    const userData = { ...user };

    return {
      ...state,
      userData,
    }
  }),

  on(UserActions.userLogoutSuccess, state => {
    return {
      ...state,
      isAuthenticated: false,
    }
  })
)

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
