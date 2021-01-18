import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services';

import { Subscription } from 'rxjs';
@Component({
  selector: 'wb-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    public authService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onLogin(form: NgForm) {
    this.sub = this.authService.login(form.value.login, form.value.password)
      .subscribe(() => this.router.navigate(['']));
  }

}
