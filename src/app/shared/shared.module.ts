import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeConverterPipe, OrderByPipe, FilterPipe } from './pipes';
import { CourseHighlightDirective } from './directives';

const exportedPipes = [TimeConverterPipe, OrderByPipe, FilterPipe];

@NgModule({
  declarations: [
    ...exportedPipes,
    CourseHighlightDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    CourseHighlightDirective,
    ...exportedPipes,
  ]
})
export class SharedModule { }
