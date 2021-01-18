import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { CoursesService } from './../../services';
import { DialogService } from './../../../core/services';

import { takeWhile } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from '../../models';

@Component({
  selector: 'wb-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less'],
})
export class CoursesListComponent implements OnInit, OnChanges, OnDestroy {
  private readonly countOfElements = 4;
  private startElementPos = 0;
  private sub: Subscription;
  courses: Course[] = [];

  constructor(
    public coursesService: CoursesService,
    private dialog: DialogService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.fetchCourses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Simple changes at list', changes);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onCourseEdit(id: string | number) {
    this.router.navigate([`edit/${id}`], { relativeTo: this.route });
  }

  onCourseDelete(id: number) {
    this.dialog.confirm('Delete this item?')
      .pipe(
        takeWhile(val => !!val)
      )
      .subscribe(() => this.coursesService.deleteCourse(id).subscribe(() => {
        const index = this.courses.findIndex(el => el.id === id);
        // on success response - delete from UI store element
        this.courses.splice(index, 1);
      }));
  }

  onLoadMore(e) {
    e.preventDefault();

    this.startElementPos += this.countOfElements;
    this.fetchCourses();
  }

  onSearchPress(term: string) {

    this.coursesService.getCourses({ textFragment: term })
      .subscribe(
        (courses: Course[]) => this.courses = courses
      );
  }

  private fetchCourses() {
    //length of items from BE ??????
    this.coursesService.getCourses({
      start: this.startElementPos,
      count: this.countOfElements,
    }).subscribe(
      (courses: Course[]) => this.courses = [...this.courses, ...courses]
    );
  }
}