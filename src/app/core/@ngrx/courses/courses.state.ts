import { Course } from './../../../courses-page/models/course.model';

export interface CoursesState {
  entities: ReadonlyArray<Course>;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialCoursesState: CoursesState = {
  entities: [],
  loading: false,
  loaded: false,
  error: null,
};
