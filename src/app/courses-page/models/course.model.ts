import { Authors } from '.';
export interface Course {
  id: string | number;
  title: string;
  creationDate: Date;
  duration: number;
  authors?: Authors
  description?: string;
  isTopRated?: boolean;
}

//for faster creation Course instance
export class CourseModel implements Course {
  constructor(
    public id: number,
    public title: string,
    public creationDate: Date = new Date(),
    public duration: number = 0,
    public authors: Authors = { id: 1232, name: 'Generated' },
    public isTopRated: boolean = false,
    // eslint-disable-next-line max-len
    public description: string = `Sadipscing eirmod voluptua no ea kasd ea lorem clita. Sanctus sit vero justo ut. Tempor dolor. Erat et sanctus labore et aliquyam dolore. Sanctus est accusam invidunt eirmod nonumy sit eos magna, est ipsum at dolore lorem, vero no dolor est et sit dolor erat. Erat consetetur amet et nonumy..`,
  ) { }
}
