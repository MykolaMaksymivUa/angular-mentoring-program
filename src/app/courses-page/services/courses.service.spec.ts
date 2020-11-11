import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { CourseModel } from './../models';
import { COURSES_LIST } from '../tokens';

describe('CoursesService', () => {
  let service: CoursesService;
  let mockServiceItems = [
    new CourseModel(1, '1', new Date('2020'), 90),
    new CourseModel(2, '2', new Date('2020'), 90),
    new CourseModel(3, '3', new Date('2020'), 90),
    new CourseModel(4, '4', new Date('2020'), 90),
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: COURSES_LIST, useValue: mockServiceItems }
      ]
    });

    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCourses should return user list', (done: DoneFn) => {
    service.getCourses().subscribe((list: CourseModel[]) => {

      expect(list).toEqual(mockServiceItems);
      done();
    })
  });

  it('deleteCourses should delete course from list', (done: DoneFn) => {
    const deletedCourse = mockServiceItems[0];
    service.deleteCourse(deletedCourse.id);
    service.getCourses().subscribe((list: CourseModel[]) => {

      expect(list).not.toContain(deletedCourse)
      done();
    })
  });

  it('addCourse should add course to the existing list', (done: DoneFn) => {
    const newCourse = new CourseModel(77, 'Test', new Date());
    service.addCourse(newCourse);
    mockServiceItems.push(newCourse);

    service.getCourses().subscribe((list: CourseModel[]) => {

      expect(list).toEqual(mockServiceItems)
      done();
    })
  });

});
