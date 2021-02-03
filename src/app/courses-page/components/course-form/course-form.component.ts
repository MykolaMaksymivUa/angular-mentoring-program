import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CourseModel } from './../../models';
import { CoursesFacade } from 'src/app/core/@ngrx/courses/courses.facade';
import { validationMessageMap } from '../../tokens';

@Component({
  selector: 'wb-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.less']
})
export class CourseFormComponent implements OnInit, OnDestroy {
  private componentDestroyed$: Subject<void> = new Subject<void>();
  course: CourseModel;
  courseForm: FormGroup;
  errorMessageList = {
    title: '',
    description: '',
    duration: ''
  };

  constructor(
    private courseFacade: CoursesFacade,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.courseFacade.selectedCourse$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((course: CourseModel) => {
        this.course = course;
        this.buildForm();
      });
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  onSaveCourse() {
    const method = this.course.id ? 'updateCourse' : 'createCourse';
    const course = {
      ...this.course,
      ...this.courseForm.value,

      //@TODO Dropdown with authors will be added later
      authors: [
        ...this.course.authors,
        {
          id: 7777,
          name: 'Mykola',
          lastName: 'Maksymiv'
        }]
    }

    this.courseFacade[method]({ course });
  }

  onCancel() {
    // deactivate guard ???
    this.courseFacade.goTo({ path: ['/courses'] });
  }

  onBlur(e) {
    const inputTarget = e.target;
    const controlName = inputTarget.getAttribute('formControlName') || inputTarget.getAttribute('name');
    this.setValidationMessage(this.courseForm.get(controlName), controlName);
  }

  buildForm() {
    this.courseForm = this.fb.group({
      title: this.fb.control(this.course.title,
        {
          validators: [Validators.required, Validators.maxLength(50)],
          updateOn: 'blur'
        }),
      description: this.fb.control(this.course.description,
        {
          validators: [Validators.required, Validators.maxLength(500)],
          updateOn: 'blur'
        }),
      duration: this.fb.control(
        this.course.duration,
        {
          validators: [Validators.required, Validators.min(1)],
          updateOn: 'blur'

        }),
      creationDate: this.fb.control(
        new Date(this.course.creationDate).toISOString().slice(0, 16),
        {
          validators: [Validators.required],
          updateOn: 'blur'

        }),
    });
  }

  private setValidationMessage(c: AbstractControl, controlName: string) {
    this.errorMessageList[controlName] = '';

    if ((c.touched || c.dirty) && c.errors) {
      this.errorMessageList[controlName] = Object.keys(c.errors)
        .map(key => validationMessageMap[controlName][key])
        .join('\r\n');
    }
  }
}
