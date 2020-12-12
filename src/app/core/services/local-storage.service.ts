import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private ls = window.localStorage;

  length: number = this.ls.length;

  constructor() {
  }

  setItem(key: string, value: object | string) {
    this.ls.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string) {
    this.ls.removeItem(key);
  }

  getItem(key: string): any {
    if (!this.ls.hasOwnProperty(key)) {
      return undefined;
    }

    try {
      const stringElement = this.ls.getItem(key);
      if (stringElement) {
        return JSON.parse(stringElement);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
