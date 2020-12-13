import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeaderComponent, FooterComponent, BreadcrumbsComponent, LoginPageComponent } from './components';
import { HeaderModule } from './components/header/header.module';
import { SharedModule } from './../shared/shared.module';
import { SpinnerComponent } from './widgets';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    LoginPageComponent,
    SpinnerComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    HeaderModule,
  ],
  exports: [HeaderComponent, BreadcrumbsComponent, FooterComponent, SpinnerComponent],
})
export class CoreModule { }
