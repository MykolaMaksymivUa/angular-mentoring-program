import { Inject, Injectable } from '@angular/core';

import { Course, CourseModel } from './../models';
import { COURSES_LIST } from '../tokens';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class CoursesService {
  private coursesListSubject: BehaviorSubject<Course[]>;
  private courseList$: Observable<Course[]>;

  constructor(@Inject(COURSES_LIST) private mockCoursesList: CourseModel[]) {
    this.coursesListSubject = new BehaviorSubject<CourseModel[]>(mockCoursesList);
    this.courseList$ = this.coursesListSubject.asObservable();
  }

  getCourses(): Observable<Course[]> {
    return this.courseList$;
  }

  addCourse(course: Course) {
    this.coursesListSubject.next([...this.coursesListSubject.value, course]);
  }

  deleteCourse(id: number | string) {
    const currentList = this.coursesListSubject.value;
    const index = currentList.findIndex(c => c.id === id);
    currentList.splice(index, 1);

    this.coursesListSubject.next(currentList);
  }
}
