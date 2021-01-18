import { Component, forwardRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl, NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Component({
  selector: 'wb-time-form',
  templateUrl: './time-form.component.html',
  styleUrls: ['./time-form.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TimeFormComponent),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => TimeFormComponent),
    multi: true
  }]
})
export class TimeFormComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() formControl: FormControl;
  @Output() focusOut = new EventEmitter<InputEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(_: any) { }

  writeValue(val: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  onBlur(e: InputEvent) {
    this.focusOut.emit(e);
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  registerOnValidatorChange?(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return !control.invalid ? null : {
      invalidForm: {
        valid: false,
        message: 'Incorrect time'
      }
    };
  }
}
