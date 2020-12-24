import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OrderByPipe, FilterPipe } from '../../../shared/pipes';

import { CourseModel } from '../../models';
import { COURSES_LIST, mockCoursesList } from '../../tokens';
import { CoursesListComponent } from './courses-list.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
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
        RouterTestingModule,
      ],
      providers: [{ provide: COURSES_LIST, useValue: mockServiceItems }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('load more should emitted only once after click', fakeAsync(() => {
    fixture.detectChanges();
    spyOn(component, 'onLoadMore');
    let btn = fixture.debugElement.query(By.css('.js-load-more'));
    btn.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();

    expect(component.onLoadMore).toHaveBeenCalledTimes(1);
  }));

  it('on course delete click and clicking OK at confirm dialog course list should updated', (done: DoneFn) => {
    fixture.detectChanges();
    spyOn(window, 'confirm').and.returnValue(true);
    const originalList = [...mockCoursesList];
    const deletedCourse = mockServiceItems[0];
    component.onCourseDelete(deletedCourse.id);

    component.coursesService.getCourses().subscribe((list: CourseModel[]) => {
      expect(list).not.toEqual(originalList);
      expect(list).not.toContain(deletedCourse);

      done();
    });
  });

  it('on course delete click and clicking cancel at confirm dialog course list should be the same', (done: DoneFn) => {
    fixture.detectChanges();
    spyOn(window, 'confirm').and.returnValue(false);
    const deletedCourse = mockServiceItems[0];
    component.onCourseDelete(deletedCourse.id);

    component.coursesService.getCourses().subscribe((list: CourseModel[]) => {
      expect(list).toContain(deletedCourse);

      done();
    });
  });
})