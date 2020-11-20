import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
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
    SharedModule,
    CoursesPageRoutingModule,
  ],
  exports: [],
})
export class CoursesPageModule { }
