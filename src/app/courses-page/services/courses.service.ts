import { Inject, Injectable } from '@angular/core';

import { Course, CourseModel } from './../models';
import { COURSES_LIST } from '../tokens';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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
    course.id = this.generateNewCourseID();

    this.coursesListSubject.next([...this.coursesListSubject.value, course]);
  }

  getCourse(id: string | number): Observable<Course> {
    return this.getCourses()
      .pipe(
        map((courses: CourseModel[]) => courses.find(course => course.id === id)),
        catchError(err => throwError('Error in getCourse method'))
      )
  }

  updateCourse(course: Course) {
    const currentList = this.coursesListSubject.value;
    currentList[currentList.findIndex(c => c.id === course.id)] = course;

    this.coursesListSubject.next(currentList);
  }

  deleteCourse(id: number | string) {
    const currentList = this.coursesListSubject.value;
    const index = currentList.findIndex(c => c.id === id);
    currentList.splice(index, 1);

    this.coursesListSubject.next(currentList);
  }

  isEmptyCourseList(): boolean {
    return !this.coursesListSubject.getValue().length;
  }

  private generateNewCourseID(): number {
    return Math.max.apply(Math, this.coursesListSubject.value.map(el => +el.id)) + 1;
  }
}
