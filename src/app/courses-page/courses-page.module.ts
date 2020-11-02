import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesPageRoutingModule } from './courses-page-routing.module';
import { CoursesListComponent, CourseItemComponent, CoursesNavigationComponent } from './components';
import { CoursesPageComponent } from './courses-page.component';


@NgModule({
  declarations: [
    CoursesListComponent,
    CourseItemComponent,
    CoursesNavigationComponent,
    CoursesPageComponent
  ],
  imports: [
    CommonModule,
    CoursesPageRoutingModule
  ],
  exports: [
  ]
})
export class CoursesPageModule { }
