import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeConverterPipe } from './pipes';


@NgModule({
  declarations: [
    TimeConverterPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    TimeConverterPipe,
  ]
})
export class SharedModule { }
