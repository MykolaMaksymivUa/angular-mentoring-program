import { CoursesState } from './courses';
import { UserState } from './user';

export interface AppState {
  courses: CoursesState,
  user: UserState
}
