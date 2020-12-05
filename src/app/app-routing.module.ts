import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent, PathNotFoundComponent } from './core/components';
import { AuthGuard } from './core/guards';

const routes: Routes = [
  {
    path: 'courses',
    canLoad: [AuthGuard],
    loadChildren: () => import('./courses-page/courses-page.module').then(m => m.CoursesPageModule),
  },
  {
    path: 'login',
    component: LoginPageComponent,
    data: {
      breadcrumb: 'Login',
    },
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/courses',
  },

  {
    path: '**',
    component: PathNotFoundComponent,
    data: {
      breadcrumb: null,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
