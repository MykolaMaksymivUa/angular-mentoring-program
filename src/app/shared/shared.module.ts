import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthorsFormComponent, DateFormComponent, TimeFormComponent } from './components';
import { TimeConverterPipe, OrderByPipe, FilterPipe } from './pipes';
import { CourseHighlightDirective } from './directives';

const exportedPipes = [TimeConverterPipe, OrderByPipe, FilterPipe];
const exportComponents = [DateFormComponent, TimeFormComponent, AuthorsFormComponent]

@NgModule({
  declarations: [
    CourseHighlightDirective,
    ...exportedPipes,
    ...exportComponents,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CourseHighlightDirective,
    ...exportedPipes,
    ...exportComponents,
  ]
})
export class SharedModule { }
