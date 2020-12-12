import { InjectionToken } from '@angular/core';
import { CourseModel } from './../../courses-page/models';

export const COURSES_LIST = new InjectionToken<CourseModel[]>('fake courses list');

export const mockCoursesList = [
  new CourseModel(1, 'HTML & CSS', new Date('2020-11-11'), 96, true),
  new CourseModel(2, 'JavaScript', new Date('2020-09-28 18:25'), 185),
  new CourseModel(3, 'Angular Introduction', new Date('2020-11'), 90),
  new CourseModel(4, 'RxJS', new Date('2020-12-18 11:11'), 20),
];