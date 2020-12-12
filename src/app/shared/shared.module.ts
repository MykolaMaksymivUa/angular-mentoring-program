import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TimeConverterPipe, OrderByPipe, FilterPipe } from './pipes';
import { CourseHighlightDirective } from './directives';

const exportedPipes = [TimeConverterPipe, OrderByPipe, FilterPipe];

@NgModule({
  declarations: [
    ...exportedPipes,
    CourseHighlightDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    CourseHighlightDirective,
    ...exportedPipes,
  ]
})
export class SharedModule { }
