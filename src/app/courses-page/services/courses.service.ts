import { Injectable } from '@angular/core';
import { Course, CourseModel } from './../models';

import { BehaviorSubject, Observable } from 'rxjs';

const mockCoursesList = [
  new CourseModel(1, 'HTML & CSS', new Date(), 96),
  new CourseModel(2, 'JavaScript', new Date(), 185),
  new CourseModel(3, 'Angular Introduction', new Date(), 90),
  new CourseModel(4, 'RxJS', new Date(), 20),
];

@Injectable({
  providedIn: 'any'
})
export class CoursesService {
  private coursesListSubject: BehaviorSubject<Course[]> = new BehaviorSubject<CourseModel[]>(mockCoursesList);
  private courseList$: Observable<Course[]> = this.coursesListSubject.asObservable();

  constructor() {
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
