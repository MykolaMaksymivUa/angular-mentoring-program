import { Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

import { Course, GetCoursesParams } from 'src/app/courses-page/models';
import { AppState, selectCourses, selectCoursesError } from '..';
import * as CoursesActions from './courses.actions';
import * as RouterActions from '../router/router.actions';

@Injectable({
  providedIn: 'root'
})
export class CoursesFacade {
  private readonly LOAD_MORE_COURSES_COUNT = 4;
  private countOfElements = this.LOAD_MORE_COURSES_COUNT;

  courses$: Observable<Course[]>;
  coursesError$: Observable<Error | string>;

  constructor(
    private store: Store<AppState>,
  ) {
    this.courses$ = this.store.select(selectCourses).pipe(
      map((courses: Course[]) => courses.slice(0, this.countOfElements))
    )
    this.coursesError$ = this.store.select(selectCoursesError);
  }

  searchCoursesByTerm(term: string): Observable<Course[]> {
    return this.courses$.pipe(
      map((courses: Course[]) => courses.filter((course) =>
        course.description.concat(course.title.toLowerCase()).indexOf(term.toLowerCase()) >= 0)
      ),
    )
  }

  loadMoreProducts(): Observable<Course[]> {
    this.countOfElements += this.LOAD_MORE_COURSES_COUNT;

    return this.courses$.pipe(
      map((courses: Course[]) => courses.slice(0, this.countOfElements))
    )
  }

  createCourse(props: { course: Course }) {
    this.store.dispatch(CoursesActions.createCourse(props));
  }

  updateCourse(props: { course: Course }) {
    this.store.dispatch(CoursesActions.updateCourse(props));
  }

  goTo(props: {
    path: any[];
    queryParams?: object;
    extras?: NavigationExtras;
  }) {
    this.store.dispatch(RouterActions.go(props));
  }
}