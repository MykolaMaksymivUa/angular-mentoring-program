import { Component, OnDestroy, OnInit } from '@angular/core';

import { CoursesService } from './../../services';
import { DialogService } from './../../../core/services';

import { takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Course } from '../../models';


import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/@ngrx/app.state';
import * as CoursesActions from '../../../core/@ngrx/courses/courses.actions';
import { CoursesFacade } from 'src/app/core/@ngrx/courses/courses.facade';

@Component({
  selector: 'wb-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less'],
})
export class CoursesListComponent implements OnInit, OnDestroy {
  courses$: Observable<Course[]>;
  coursesError$: Observable<Error | string>;

  constructor(
    public coursesService: CoursesService,
    private dialog: DialogService,

    private store: Store<AppState>,
    private coursesFacade: CoursesFacade
  ) {
  }

  ngOnInit(): void {
    // move to strategy
    this.store.dispatch(CoursesActions.loadCourses({ params: {} }));

    this.courses$ = this.coursesFacade.courses$;
    this.coursesError$ = this.coursesFacade.coursesError$;
  }

  ngOnDestroy(): void {
  }

  onCourseEdit(id: string | number) {
    this.coursesFacade.goTo({ path: [`courses/edit/${id}`] });
  }

  onCourseDelete(id: number) {
    this.dialog.confirm('Delete this item?')
      .pipe(
        takeWhile(val => !!val)
      )
      .subscribe(() => this.coursesService.deleteCourse(id).subscribe(() => {
        // const index = this.courses.findIndex(el => el.id === id);
        // on success response - delete from UI store element
        // this.courses.splice(index, 1);
      }));
  }

  onLoadMore(e) {
    e.preventDefault();
    this.courses$ = this.coursesFacade.loadMoreProducts();
  }

  onSearchPress(term: string) {
    this.courses$ = this.coursesFacade.searchCoursesByTerm(term);
  }
}