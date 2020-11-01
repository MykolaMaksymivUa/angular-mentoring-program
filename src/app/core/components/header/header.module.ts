import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent, LogoComponent, AccountComponent } from '.';


@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    AccountComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
