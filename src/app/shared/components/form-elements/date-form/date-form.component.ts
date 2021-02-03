import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Component({
  selector: 'wb-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateFormComponent),
      multi: true
    }]
})
export class DateFormComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() formControl: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  validate(control: AbstractControl): ValidationErrors {
    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
  }

}
