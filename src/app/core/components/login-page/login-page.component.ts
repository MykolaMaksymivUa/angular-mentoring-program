import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services';

@Component({
  selector: 'wb-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {

  constructor(
    public authService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    this.authService.login(form.value.login, form.value.password);
    this.router.navigate(['']);
  }

}
