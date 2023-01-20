import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() login: EventEmitter<boolean> = new EventEmitter();
  @Output() register: EventEmitter<Object> = new EventEmitter();

  email!: string;
  password!: string;
  name!: string;
  phone!: number;
  isLogin!: boolean;

  ngOnInit() {
    this.isLogin = false;
  }

  loginUser(): void {
    this.isLogin = !this.isLogin;
    this.login.emit(this.isLogin);
  }

  registerUser(): void {
    const reqBody = {
      email: this.email,
      password: this.password,
      name: this.name,
    };

    this.register.emit(reqBody);
  }
}
