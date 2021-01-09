import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CourseModel } from './../../models';
import { CoursesFacade } from 'src/app/core/@ngrx/courses/courses.facade';

@Component({
  selector: 'wb-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.less']
})
export class CourseFormComponent implements OnInit, OnDestroy {
  private courseSub: Subscription;
  private componentDestroyed$: Subject<void> = new Subject<void>();
  course: CourseModel;

  constructor(
    private courseFacade: CoursesFacade
  ) { }

  ngOnInit(): void {
    this.courseFacade.selectedCourse$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((course: CourseModel) => {
        this.course = course;
      });
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  onSaveCourse(form: NgForm) {
    const method = this.course.id ? 'updateCourse' : 'createCourse';
    const course = {
      ...this.course,
      ...form.value,
      creationDate: new Date(form.value.creationDate),
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
}
