import { InjectionToken } from '@angular/core';

export const CONSTANT_LIST = new InjectionToken<Constants>('constant list', {
  providedIn: 'any',
  factory: () => constantsList,
});

const apiDomain = 'http://localhost:3004';

export interface Constants {
  coursesEndpoint: string;
  loginEndpoint: string;
  userInfoEndpoint: string;
  authorsEndpoint: string;

  userTokenStorageKey: string;
};

export const constantsList: Constants = {
  coursesEndpoint: `${apiDomain}/courses`,
  loginEndpoint: `${apiDomain}/auth/login`,
  userInfoEndpoint: `${apiDomain}/auth/userinfo`,
  authorsEndpoint: `${apiDomain}/authors`,
  userTokenStorageKey: 'userData',
};
