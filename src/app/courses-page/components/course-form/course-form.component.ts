import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { CoursesService } from '../../services';
import { CourseModel } from './../../models';

@Component({
  selector: 'wb-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.less']
})
export class CourseFormComponent implements OnInit, OnDestroy {
  course: CourseModel;
  private courseSub: Subscription;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private courseService: CoursesService
  ) { }

  ngOnInit(): void {
    this.courseSub = this.activeRoute.data
      .pipe(pluck('course'))
      .subscribe((course: CourseModel) => this.course = course);
  }

  ngOnDestroy(): void {
    this.courseSub.unsubscribe();
  }

  onSaveCourse(form: NgForm) {
    const method = this.course.id ? 'updateCourse' : 'addCourse';
    this.course.creationDate = new Date(form.value.creationDate);
    this.course.duration = form.value.duration;

    this.courseService[method](this.course);
    this.router.navigate(['/courses']);
  }

  onCancel() {
    // deactivate guard ???
    this.router.navigate(['/courses']);
  }
}
