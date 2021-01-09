import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';
import { AppState } from '../app.state';

const selectData = (state: UserState) => state.userData;
const selectError = (state: UserState) => state.error;
const selectIsAuthenticated = (state: UserState) => state.isAuthenticated;

export const selectUserState = createFeatureSelector<AppState, UserState>('user');
export const selectUserError = createSelector(selectUserState, selectError);
export const selectUserIsAuthenticated = createSelector(selectUserState, selectIsAuthenticated);
export const selectUserData = createSelector(selectUserState, selectData);

export const selectUsername = createSelector(
  selectUserData,
  (data) => data.firstName + ' ' + data.lastName
);