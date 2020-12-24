import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPageComponent } from './courses-page.component';
import { CourseFormComponent, CoursesListComponent } from './components';
import { CourseResolveGuard } from './guards';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesPageComponent,
    children: [
      {
        path: '',
        component: CoursesListComponent
      },
      {
        path: 'new',
        component: CourseFormComponent,
        resolve: {
          course: CourseResolveGuard,
        },
      },
      {
        path: 'edit/:courseID',
        component: CourseFormComponent,
        resolve: {
          course: CourseResolveGuard,
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRoutingModule {
  static components = [
    CoursesPageComponent,
    CoursesListComponent,
    CourseFormComponent,
  ]
}
