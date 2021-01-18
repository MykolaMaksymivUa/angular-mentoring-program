import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/core/services';
@Component({
  selector: 'wb-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less'],
})
export class AccountComponent implements OnInit {
  username = '';
  constructor(
    public authService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  onLogout() {
    this.authService.logout();

    this.router.navigate(['login']);
  }

  getUserInfo() {
    if (this.authService.isAuthenticated) {
      this.authService.getUserInfo().subscribe((name: string) => this.username = name);
    }
  }
}
