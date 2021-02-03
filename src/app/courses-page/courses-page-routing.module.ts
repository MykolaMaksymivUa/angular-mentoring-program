import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPageComponent } from './courses-page.component';
import { CourseFormComponent, CoursesListComponent } from './components';
import { CourseResolveGuard, CoursesStatePreloadingGuard } from './guards';
import { AuthGuard } from './../core/guards';

const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent,
    canActivate: [AuthGuard, CoursesStatePreloadingGuard],
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
            // resolve: {
            //   course: CourseResolveGuard,
            // },
            canActivate: [CoursesStatePreloadingGuard],
            data: {
              breadcrumb: 'New course'
            },
          },
          {
            path: 'edit/:courseID',
            component: CourseFormComponent,
            canActivate: [CoursesStatePreloadingGuard],
            // resolve: {
            //   course: CourseResolveGuard,
            // },
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
