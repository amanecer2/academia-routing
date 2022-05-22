import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuth = false
  constructor() { }

  isAuth(): boolean {
    return this._isAuth;
  }
}
