import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CourseFormComponent } from './course-form.component';
import { COURSES_LIST } from '../../tokens';
import { CourseModel } from '../../models';
import { of } from 'rxjs';

describe('CourseFormComponent', () => {
  let component: CourseFormComponent;
  let fixture: ComponentFixture<CourseFormComponent>;
  let mockServiceItems = [
    new CourseModel(1, '1', new Date('2020'), 90),
    new CourseModel(2, '2', new Date('2020'), 90),
    new CourseModel(3, '3', new Date('2020'), 90),
    new CourseModel(4, '4', new Date('2020'), 90),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseFormComponent],
      imports: [
        FormsModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: COURSES_LIST, useValue: mockServiceItems },
        {
          provide: ActivatedRoute,
          useClass: class {
            // resolve guard
            data = of({ course: mockServiceItems[0] });
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
