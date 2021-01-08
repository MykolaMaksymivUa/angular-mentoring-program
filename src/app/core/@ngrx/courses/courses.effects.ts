import { GetCoursesParams } from './../../../courses-page/models/get-courses-params.model';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, map, pluck, switchMap, tap } from 'rxjs/operators';

import { Course } from 'src/app/courses-page/models/course.model';
import { CoursesService } from './../../../courses-page/services';
import * as CoursesActions from './courses.actions';

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
}
