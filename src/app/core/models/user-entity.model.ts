export interface UserLogin {
  login: string;
  password: string;
}
export interface UserEntity {
  // token: UserToken;
  firstName: string;
  lastName: string;
}

export interface UserToken {
  token: string;
}
