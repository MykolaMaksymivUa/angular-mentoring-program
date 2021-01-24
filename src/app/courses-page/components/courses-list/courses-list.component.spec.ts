import { constantsList } from './../../../shared/tokens/constant.config';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OrderByPipe, FilterPipe } from '../../../shared/pipes';

import { CourseModel } from '../../models';
import { COURSES_LIST, mockCoursesList } from '../../tokens';
import { CoursesListComponent } from './courses-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Constants, CONSTANT_LIST } from 'src/app/shared/tokens/constant.config';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let httpTestingController: HttpTestingController;
  let mockServiceItems = [
    new CourseModel(1, '1', new Date('2020'), 90),
    new CourseModel(2, '2', new Date('2020'), 90),
    new CourseModel(3, '3', new Date('2020'), 90),
    new CourseModel(4, '4', new Date('2020'), 90),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesListComponent, OrderByPipe, FilterPipe],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [{ provide: COURSES_LIST, useValue: mockServiceItems }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on course delete click and clicking OK at confirm dialog course list should updated', (done: DoneFn) => {
    fixture.detectChanges();
    spyOn(window, 'confirm').and.returnValue(true);
    component.courses = mockServiceItems;
    const deletedCourse = mockServiceItems[0];
    const originalList = [...mockServiceItems];
    component.onCourseDelete(deletedCourse.id);

    const req = httpTestingController.expectOne(`${constantsList.coursesEndpoint}/${deletedCourse.id}`);
    req.flush(deletedCourse);
    fixture.detectChanges();

    expect(component.courses).not.toEqual(originalList);
    expect(component.courses).not.toContain(deletedCourse);

    done();
  });
})