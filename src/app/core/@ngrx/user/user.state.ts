import { UserEntity } from './../../models';

export interface UserState {
  userData: Readonly<UserEntity>;
  readonly isAuthenticated: boolean;
  readonly error: Error | string;
}

export const initialUserState: UserState = {
  userData: {
    firstName: '',
    lastName: '',
  },
  isAuthenticated: false,
  error: null,
}
