import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap, catchError, tap, filter, take } from 'rxjs/operators';

import { selectCoursesLoaded } from 'src/app/core/@ngrx';
import { select, Store } from '@ngrx/store';
import * as CoursesActions from '../../core/@ngrx/courses/courses.actions';

@Injectable({
  providedIn: 'root'
})
export class CoursesStatePreloadingGuard implements CanActivate {
  constructor(private store: Store) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.pipe(
      select(selectCoursesLoaded),

      // make a side effect
      tap((loaded: boolean) => {
        if (!loaded) {
          this.store.dispatch(CoursesActions.loadCourses({ params: {} }));
        }
      }),
      filter((loaded: boolean) => loaded),
      take(1)
    );
  }

}
