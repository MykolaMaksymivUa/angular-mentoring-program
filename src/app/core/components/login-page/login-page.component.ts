import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validator, Validators, AbstractControl, FormControl } from '@angular/forms';

import { UserLogin } from '../../models';
import { Store } from '@ngrx/store';
import * as UserActions from '../../@ngrx/user/user.actions';

@Component({
  selector: 'wb-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private store: Store,
    private fb: FormBuilder
  ) { }

  get loginControl(): FormControl {
    return this.loginForm.get('login') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onLogin() {
    console.log(this.loginForm);

    const userLogin: UserLogin = this.loginForm.value;
    this.store.dispatch(UserActions.userLogin({ userLogin }));
  }

  isControlHasError(c: AbstractControl) {
    return (c.touched || c.dirty) && c.errors;
  }

  private buildForm() {
    this.loginForm = this.fb.group({
      login: this.fb.control('',
        {
          validators: [Validators.required, Validators.minLength(3)],
          updateOn: 'blur'
        }
      ),
      password: this.fb.control('',
        {
          validators: [Validators.required, Validators.minLength(4)],
          updateOn: 'blur'
        }
      ),
    })
  }
}
