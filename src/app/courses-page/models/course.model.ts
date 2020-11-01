export interface Course {
  id: string | number;
  title: string;
  creationDate: Date;
  duration: number;
  description?: string;
}

//for faster creation Course instance
export class CourseModel {
  constructor(
    id: string | number,
    title: string,
    creationDate: Date,
    duration: number,
    description: string = `Gxi liberulo sporto mi ke gxi tiu jam kaj tion. 
      Sed direktis sendangxeran tie-cxi iros iu viro sxipo haltigis diveni..`,
  ) {
  }

}