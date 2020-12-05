import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/core/services';
@Component({
  selector: 'wb-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less'],
})
export class AccountComponent implements OnInit {
  constructor(
    public authService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();

    this.router.navigate(['login']);
  }
}
