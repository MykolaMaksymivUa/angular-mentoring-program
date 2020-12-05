import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeaderComponent, FooterComponent, BreadcrumbsComponent, LoginPageComponent } from './components';
import { HeaderModule } from './components/header/header.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [BreadcrumbsComponent, FooterComponent, LoginPageComponent],
  imports: [
    SharedModule,
    RouterModule,
    HeaderModule,
  ],
  exports: [HeaderComponent, BreadcrumbsComponent, FooterComponent],
})
export class CoreModule { }
