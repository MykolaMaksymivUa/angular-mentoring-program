import { Component, OnInit } from '@angular/core';
import { UserEntity } from 'src/app/core/models';

@Component({
  selector: 'wb-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less'],
})
export class AccountComponent implements OnInit, UserEntity {
  id: string | number;
  firstName: string;
  lastName: string;

  constructor() {}

  ngOnInit(): void {
    this.id = '007';
    this.firstName = 'Mykola';
    this.lastName = 'Maksymiv';
  }
}
