import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
  Router,
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';

import { CourseModel } from '../models';
import { CoursesService } from './../services/courses.service';

@Injectable({
  providedIn: 'any'
})
export class CourseResolveGuard implements Resolve<CourseModel> {
  constructor(
    private coursesService: CoursesService,
    private router: Router,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): CourseModel | Observable<CourseModel> | Promise<CourseModel> {

    if (!route.paramMap.has('courseID')) {
      return of(new CourseModel(1, '', new Date(), 0, { id: null, name: '' }, false, ''));
    }

    const id = +route.paramMap.get('courseID');
    return this.coursesService.getCourse(id).pipe(
      map((course: CourseModel) => {
        if (course) {
          return course;
        } else {
          this.router.navigate(['/courses']);

          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/courses']);

        return of(null);
      }),
    );
  }
}
