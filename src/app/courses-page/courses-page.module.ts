import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CoursesPageRoutingModule } from './courses-page-routing.module';
import { CourseItemComponent, CoursesNavigationComponent } from './components';
import { mockCoursesList, COURSES_LIST } from './tokens';

@NgModule({
  declarations: [
    CourseItemComponent,
    CoursesNavigationComponent,
    ...CoursesPageRoutingModule.components,
  ],
  imports: [
    SharedModule,
    CoursesPageRoutingModule,
  ],
  exports: [],
  providers: [
    { provide: COURSES_LIST, useValue: mockCoursesList },
  ]
})
export class CoursesPageModule { }
