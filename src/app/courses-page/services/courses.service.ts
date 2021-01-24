import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Course, CourseModel, GetCoursesParams } from './../models';
import { CONSTANT_LIST, Constants } from './../../shared/tokens/constant.config';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'any'
})
export class CoursesService {

  constructor(
    @Inject(CONSTANT_LIST) private constants: Constants,
    private http: HttpClient
  ) {
  }

  getCourses(paramsMap?: GetCoursesParams): Observable<Course[]> {
    let params = '';
    if (paramsMap) {
      params = paramsMap.count ? '?start=' + paramsMap.start + '&count=' + paramsMap.count : '';
      params += paramsMap.textFragment ? '?textFragment=' + paramsMap.textFragment : '';
    }

    return this.http
      .get<Course[]>(`${this.constants.coursesEndpoint}${params}`);
  }

  addCourse(course: Course): Observable<Course> {
    course.id = this.generateNewCourseID();
    course.authors = {
      id: 7777,
      name: 'Mykola',
      lastName: 'Maksymiv'
    }

    return this.http.post<Course>(this.constants.coursesEndpoint, course);
  }

  getCourse(id: string | number): Observable<Course> {
    return this.http.get<Course>(`${this.constants.coursesEndpoint}/${id}`);
  }

  updateCourse(course: Course): Observable<Course> {
    course.authors = {
      id: 7777,
      name: 'Mykola',
      lastName: 'Maksymiv'
    }

    return this.http.patch<Course>(`${this.constants.coursesEndpoint}/${course.id}`, course);
  }

  deleteCourse(id: number): Observable<unknown> {
    return this.http.delete(`${this.constants.coursesEndpoint}/${id}`);
  }

  private generateNewCourseID(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
