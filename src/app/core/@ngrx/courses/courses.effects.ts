import { GetCoursesParams } from './../../../courses-page/models/get-courses-params.model';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, pluck, switchMap, tap } from 'rxjs/operators';

import { Course } from 'src/app/courses-page/models/course.model';
import { CoursesService } from './../../../courses-page/services';
import * as CoursesActions from './courses.actions';
import * as RouterActions from '../router/router.actions';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) { }

  getProducts$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.loadCourses),
      pluck('params'),
      switchMap((params: GetCoursesParams) => {
        return this.coursesService.getCourses(params)
          .pipe(
            map((courses: Course[]) => CoursesActions.loadCoursesSuccess({ courses })),
            catchError(error => of(CoursesActions.loadCoursesFailure({ error })))
          );
      })
    );
  });

  updateCourse$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.updateCourse),
      pluck('course'),
      concatMap((course: Course) =>
        this.coursesService.updateCourse(course)
          .pipe(
            map((course: Course) => CoursesActions.updateCourseSuccess({ course })),
            catchError(error => of(CoursesActions.updateCourseError({ error })))
          )
      )
    )
  });

  createCourse$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.createCourse),
      pluck('course'),
      concatMap((course: Course) => this.coursesService.addCourse(course)
        .pipe(
          map((course: Course) => CoursesActions.createCourseSuccess({ course })),
          catchError(error => of(CoursesActions.createCourseError({ error })))
        )
      ),
    )
  });

  deleteCourse$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.deleteCourse),
      pluck('id'),
      concatMap((id: number) => this.coursesService.deleteCourse(id)
        .pipe(
          map(e => CoursesActions.deleteCourseSuccess({ id })),
          catchError(error => of(CoursesActions.deleteCourseError({ error })))
        )
      )
    )
  });

  createUpdateCourseSuccess$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.createCourseSuccess, CoursesActions.updateCourseSuccess),
      map(action => RouterActions.goHome())
    );
  });
}
