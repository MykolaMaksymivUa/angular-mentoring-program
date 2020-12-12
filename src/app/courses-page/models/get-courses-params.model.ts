export interface GetCoursesParams {
  start?: number;
  count?: number;
  sort?: 'id' | 'name' | 'description' | 'duration' | 'creationDate';
  textFragment?: string;
}