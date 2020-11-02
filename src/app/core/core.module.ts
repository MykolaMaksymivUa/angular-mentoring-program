import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent, FooterComponent, BreadcrumbsComponent } from './components';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent
  ]
})
export class CoreModule { }
