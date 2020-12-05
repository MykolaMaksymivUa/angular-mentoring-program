import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { UserEntity } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly ENCODE_KEY: number = 0x1234F;
  private readonly storageKey: string = 'userData';
  private userData: UserEntity;
  isAuthenticated = false;
  redirectUrl: string;

  constructor(
    private ls: LocalStorageService
  ) {
    this.userData = this.ls.getItem(this.storageKey);
    this.isAuthenticated = !!this.userData;
  }

  login(login: string, password: string) {
    if (this.isAuthenticated) {
      return false;
    }

    this.userData = {
      idToken: Math.floor(Math.random() * 100),
      login: login,
      password: parseInt(password, 16) ^ this.ENCODE_KEY
    }

    this.ls.setItem(this.storageKey, this.userData);
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
    this.ls.removeItem(this.storageKey);
  }

  getUserInfo(): string {
    return this.userData && this.userData.login;
  }
}
