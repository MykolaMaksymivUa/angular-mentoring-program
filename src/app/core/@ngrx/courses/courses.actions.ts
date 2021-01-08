import { createAction, props } from '@ngrx/store';

import { Course, GetCoursesParams } from './../../../courses-page/models';

export const loadCourses = createAction(
  '[Courses] Load Courses',
  props<{ params?: GetCoursesParams }>()
);
export const loadCoursesSuccess = createAction(
  '[Load Courses Effect] Load Courses Success',
  props<{ courses: Course[] }>()
);
export const loadCoursesFailure = createAction(
  '[Load Courses Effect] Load Courses Failure',
  props<{ error: Error | string }>()
);

export const createCourse = createAction(
  '[Course Form Page ] CREATE_COURSE',
  props<{ course: Course }>()
);
export const createCourseSuccess = createAction(
  '[Create Course Effect] CREATE_COURSE_SUCCESS',
  props<{ course: Course }>()
);
export const createCourseError = createAction(
  '[Create Course Effect] CREATE_COURSE_ERROR',
  props<{ error: Error | string }>()
);

export const updateCourse = createAction(
  '[Update Form Page ] EDIT_COURSE',
  props<{ course: Course }>()
);
export const updateCourseSuccess = createAction(
  '[Update Course Effect] EDIT_COURSE_SUCCESS',
  props<{ course: Course }>()
);
export const updateCourseError = createAction(
  '[Update Course Effect] EDIT_COURSE_ERROR',
  props<{ error: Error | string }>()
);

export const deleteCourse = createAction(
  '[Course List Page] DELETE_COURSE',
  props<{ id: number }>()
);
export const deleteCourseSuccess = createAction(
  '[Delete course Effect] DELETE_COURSE_SUCCESS',
  props<{ id: number }>()
);
export const deleteCourseError = createAction(
  '[Delete course Effect] DELETE_COURSE_ERROR',
  props<{ error: Error | string }>()
);
