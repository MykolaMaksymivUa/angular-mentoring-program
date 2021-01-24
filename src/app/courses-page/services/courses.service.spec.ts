import { CONSTANT_LIST, constantsList, Constants } from './../../shared/tokens/constant.config';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { Course, CourseModel } from './../models';
import { HttpClient } from '@angular/common/http';

describe('CoursesService', () => {
  let httpTestingController: HttpTestingController;
  let service: CoursesService;
  let constantsList: Constants;

  let mockServiceItems = [
    new CourseModel(1, '1', new Date('2020'), 90, { id: 1232, name: 'Generated' }, false, 'lorem ipsum'),
    new CourseModel(2, '2', new Date('2020'), 90),
    new CourseModel(3, '3', new Date('2020'), 90),
    new CourseModel(4, '4', new Date('2020'), 90),
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpClient
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CoursesService);
    constantsList = TestBed.inject(CONSTANT_LIST);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCourses should return user list', (done: DoneFn) => {
    service.getCourses().subscribe((list: Course[]) => {
      expect(list).not.toBe(null);
      expect(JSON.stringify(list)).toEqual(JSON.stringify(mockServiceItems));
      done();
    });
    const req = httpTestingController.expectOne(constantsList.coursesEndpoint);

    expect(req.request.method).toEqual('GET');
    req.flush(mockServiceItems);
  });

  it('deleteCourses should delete course from list', (done: DoneFn) => {
    const deletedCourse = mockServiceItems[0];
    service.deleteCourse(deletedCourse.id).subscribe((deletedCourse: CourseModel) => {
      expect(deletedCourse).toEqual(deletedCourse)
      done();
    })

    const deleteReq = httpTestingController.expectOne(`${constantsList.coursesEndpoint}/1`);

    expect(deleteReq.request.method).toEqual('DELETE');
    deleteReq.flush(deletedCourse);
  });

  it('addCourse should add course and return added model', (done: DoneFn) => {
    const newCourse = new CourseModel(5, 'Test', new Date());
    service.addCourse(newCourse).subscribe((course: Course) => {
      expect(course).toEqual(newCourse);
      expect(course).not.toBe(null);

      done();
    });

    const addReq = httpTestingController.expectOne(`${constantsList.coursesEndpoint}`);

    expect(addReq.request.method).toEqual('POST');
    addReq.flush(newCourse);
  });

  it('getCourse with id \'1\' should return course with title \'1\'', () => {
    const searchedCourse = mockServiceItems[0];

    service.getCourse(searchedCourse.id).subscribe((course: CourseModel) => {
      expect(course).toEqual(searchedCourse);
    });
    const getReq = httpTestingController.expectOne(`${constantsList.coursesEndpoint}/${searchedCourse.id}`);

    expect(getReq.request.method).toEqual('GET');
    getReq.flush(searchedCourse);
  });

});
