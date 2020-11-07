import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { CoursesService } from './../../services';

@Component({
  selector: 'wb-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less'],
})
export class CoursesListComponent implements OnInit, OnChanges {
  constructor(public coursesService: CoursesService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Simple changes at list', changes);
  }

  ngOnInit(): void {
    console.log('Component initialized');
  }

  onCourseEdit(id: string | number) {
    // this.router.navigate([`course/${id}`]);
    console.log(`Course with id: ${id} was edited`);
  }

  onCourseDelete(id: string | number) {
    this.coursesService.deleteCourse(id);

    console.log(`Course with id: ${id} was deleted`);
  }

  onLoadMore(e) {
    e.preventDefault();
    console.log('Loaded 4 products');
  }
}