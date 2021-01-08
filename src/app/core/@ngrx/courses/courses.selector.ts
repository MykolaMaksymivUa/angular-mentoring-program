import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './../app.state';
import { selectRouterState } from './../router';
import { Course, CourseModel } from './../../../courses-page/models/course.model';
import { CoursesState } from './courses.state';

const selectEntities = (state: CoursesState) => state.entities;
const selectLoaded = (state: CoursesState) => state.loaded;
const selectLoading = (state: CoursesState) => state.loading;
const selectError = (state: CoursesState) => state.error;

export const selectCoursesState = createFeatureSelector<AppState, CoursesState>('courses');
export const selectCoursesEntities = createSelector(selectCoursesState, selectEntities);
export const selectCoursesLoaded = createSelector(selectCoursesState, selectLoaded);
export const selectCoursesLoading = createSelector(selectCoursesState, selectLoading);
export const selectCoursesError = createSelector(selectCoursesState, selectError);

export const selectCourses = createSelector(
  selectCoursesEntities,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);
// export const selectCoursesByTerm = createSelector(
//   selectCoursesEntities,
// )
export const selectCourseByUrl = createSelector(
  selectCoursesEntities,
  selectRouterState,
  (courses, router): Course => {

    const courseID = router.state.params.taskID;
    if (courseID && Array.isArray(courses)) {
      return courseID.find(course => course.id === +courseID);
    } else {
      return new CourseModel(1, '', new Date(), 0, { id: null, name: '' }, false, '');
    }
  });
