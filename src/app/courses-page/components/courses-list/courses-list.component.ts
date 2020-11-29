import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { CoursesService } from './../../services';
import { DialogService } from './../../../core/services';

import { takeWhile } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'wb-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less'],
})
export class CoursesListComponent implements OnInit, OnChanges {
  searchTerm = '';

  constructor(
    public coursesService: CoursesService,
    private dialog: DialogService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Simple changes at list', changes);
  }

  ngOnInit(): void {
    console.log('Component initialized');
  }

  onCourseEdit(id: string | number) {
    this.router.navigate([`edit/${id}`], { relativeTo: this.route });
  }

  onCourseDelete(id: string | number) {
    this.dialog.confirm('Delete this item?')
      .pipe(
        takeWhile(val => !!val)
      )
      .subscribe(() => this.coursesService.deleteCourse(id));
  }

  onLoadMore(e) {
    e.preventDefault();
    console.log('Loaded 4 products');
  }
}