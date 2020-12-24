import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'wb-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.less'],
  // @TODO override for correct form with nested components.
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DateFormComponent implements OnInit {
  @Input() date: Date;
  isoDate: string;

  constructor() { }

  ngOnInit(): void {
    this.isoDate = this.date.toISOString().slice(0, 16);
  }

}
