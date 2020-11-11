import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeConverterPipe } from './../../../shared/pipes/time-converter.pipe';
import { CourseItemComponent } from './course-item.component';
import { CourseModel } from './../../models';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let courseInput: CourseModel = new CourseModel(1, 'HTML & CSS', new Date('2020-09-28'), 96);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemComponent, TimeConverterPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    // courseInput ;
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = courseInput;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the edit event when clicked', (done: DoneFn) => {
    component.courseEdit.subscribe((id: number | string) => {
      expect(id).toBe(component.course.id);
      done();
    })

    component.onCourseEdit();
  });

  it('raises the delete event when clicked', (done: DoneFn) => {
    component.courseDelete.subscribe((id: number | string) => {
      expect(id).toBe(component.course.id);
      done();
    })

    component.onCourseDelete();
  });
});
