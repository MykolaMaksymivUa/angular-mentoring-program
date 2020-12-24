import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'wb-time-form',
  templateUrl: './time-form.component.html',
  styleUrls: ['./time-form.component.less'],
  // @TODO override for correct form with nested components.
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TimeFormComponent implements OnInit {
  @Input() timeDuration;
  @Input() parentGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
