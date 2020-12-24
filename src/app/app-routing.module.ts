import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPageComponent } from './courses-page/courses-page.component';
import { LoginPageComponent, PathNotFoundComponent } from './core/components';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/courses',
  },

  {
    path: '**',
    component: PathNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
