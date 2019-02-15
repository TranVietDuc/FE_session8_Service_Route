import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {LoginServiceService} from '../login-service.service';

@Component({
  selector: 'app-login-step2',
  templateUrl: './login-step2.component.html',
  styleUrls: ['./login-step2.component.scss']
})
export class LoginStep2Component implements OnInit {

  username: string;
  password = new FormControl();
  isLogin: boolean;

  constructor(private loginSrv: LoginServiceService) { }

  ngOnInit() {
    this.username = this.loginSrv.loginData.username;
    this.isLogin = false;
  }
  login() {
    this.loginSrv.loginData.password = this.password.value;
    this.isLogin = true;
  }
}
