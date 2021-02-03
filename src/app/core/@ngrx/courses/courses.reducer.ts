import { CoursesState } from './courses.state';
import { Action, createReducer, on } from '@ngrx/store';
import { initialCoursesState } from './courses.state';
import * as CoursesActions from './courses.actions';

export const reducer = createReducer(
  initialCoursesState,

  on(CoursesActions.loadCourses, (state, props) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(CoursesActions.loadCoursesSuccess, (state, { courses }) => {
    const entities = [...state.entities, ...courses];

    return {
      ...state,
      entities,
      loading: false,
      loaded: true,
    }
  }),
  on(
    CoursesActions.loadCoursesFailure, (state, { error }) => {
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }),

  on(CoursesActions.createCourseSuccess, (state, { course }) => {
    const entities = [...state.entities, { ...course }];

    return {
      ...state,
      entities
    };
  }),

  on(CoursesActions.updateCourseSuccess, (state, { course }) => {
    // Use adapter from NgRx entity.
    const entities = [...state.entities];
    const index = entities.findIndex(el => el.id === course.id);

    entities[index] = { ...course };

    return {
      ...state,
      entities
    };
  }),

  on(CoursesActions.deleteCourseSuccess, (state, { id }) => {
    const entities = state.entities.filter(el => el.id !== id);

    return {
      ...state,
      entities
    };
  }),

  on(
    CoursesActions.createCourseError,
    CoursesActions.updateCourseError,
    CoursesActions.deleteCourseError,
    (state, { error }) => {

      return {
        ...state,
        error
      }
    })
);

export function coursesReducer(state: CoursesState | undefined, action: Action) {
  return reducer(state, action);
}
