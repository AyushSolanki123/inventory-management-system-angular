import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() register: EventEmitter<boolean> = new EventEmitter();
  @Output() login: EventEmitter<Object> = new EventEmitter();
  email!: string;
  password!: string;
  isLogin!: boolean;

  ngOnInit() {
    this.isLogin = true;
  }

  registerUser(): void {
    this.isLogin = !this.isLogin;
    this.register.emit(this.isLogin);
  }

  loginUser(): void {
    const reqBody = {
      email: this.email,
      password: this.password,
    };
    this.login.emit(reqBody);
  }
}
