import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPageComponent } from './courses-page.component';
import { CourseFormComponent, CoursesListComponent } from './components';
import { CourseResolveGuard } from './guards';
import { AuthGuard } from './../core/guards';

const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Courses'
    },
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        data: {
          breadcrumb: null
        },
        children: [
          {
            path: '',
            component: CoursesListComponent,
            data: {
              breadcrumb: null,
            },
          },
          {
            path: 'new',
            component: CourseFormComponent,
            resolve: {
              course: CourseResolveGuard,
            },
            data: {
              breadcrumb: 'New course'
            },
          },
          {
            path: 'edit/:courseID',
            component: CourseFormComponent,
            resolve: {
              course: CourseResolveGuard,
            },
            data: {
              breadcrumb: 'Edit course'
            },
          },
        ]
      }
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
