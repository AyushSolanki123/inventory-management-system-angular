import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLogin!: boolean;

  constructor() {
    this.isLogin = true;
  }

  changeAuth(authMode: boolean): void {
    this.isLogin = authMode;
  }

  loginUser(reqBody: Object): void {
    // TODO: API to login user
  }

  registerUser(reqBody: Object): void {
    // TODO: API to register user then redirect to user to login or onboarding
  }
}
