import { Component, OnDestroy, OnInit } from '@angular/core';

import { DialogService } from './../../../core/services';
import { Course } from '../../models';

import { takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
    private dialog: DialogService,
    private coursesFacade: CoursesFacade
  ) {
  }

  ngOnInit(): void {
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
      .subscribe(() => this.coursesFacade.deleteCourse({ id }));
  }

  onLoadMore(e) {
    e.preventDefault();

    this.courses$ = this.coursesFacade.loadMoreProducts();
  }

  onSearchPress(term: string) {
    this.courses$ = this.coursesFacade.searchCoursesByTerm(term);
  }
}
