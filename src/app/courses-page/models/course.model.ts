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
    public id: string | number,
    public title: string,
    public creationDate: Date = new Date(),
    public duration: number = 0,
    // eslint-disable-next-line max-len
    public description: string = `Sadipscing eirmod voluptua no ea kasd ea lorem clita. Sanctus sit vero justo ut. Tempor dolor. Erat et sanctus labore et aliquyam dolore. Sanctus est accusam invidunt eirmod nonumy sit eos magna, est ipsum at dolore lorem, vero no dolor est et sit dolor erat. Erat consetetur amet et nonumy..`
  ) { }
}
