import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPageComponent } from './courses-page/courses-page.component';
import { PathNotFoundComponent } from './core/components';

const routes: Routes = [
  {
    path: 'home',
    component: CoursesPageComponent
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },

  {
    path: '**',
    component: PathNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
