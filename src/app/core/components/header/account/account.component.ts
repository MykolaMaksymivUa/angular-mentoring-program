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
  ) { }

  ngOnInit(): void {
  }
}
