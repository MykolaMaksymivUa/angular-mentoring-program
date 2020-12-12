import { Directive, ElementRef, Input, Renderer2, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[wbCourseHighlight]'
})
export class CourseHighlightDirective implements OnInit {
  @Input('wbCourseHighlight') creationDate: number | Date;
  @HostBinding('class') elementClass;
  private readonly releaseBuffer: number = 14;

  currentDate = new Date();
  futureCourseColor = 'green';
  relevantCourseColor = 'blue';

  constructor() { }

  ngOnInit(): void {
    const isFutureRelease = this.creationDate > this.currentDate;

    if (isFutureRelease) {
      this.elementClass = `highlight-border--${this.futureCourseColor}`;
    } else if (!isFutureRelease && this.creationDate >= new Date().setDate(this.currentDate.getDate() - this.releaseBuffer)) {
      this.elementClass = `highlight-border--${this.relevantCourseColor}`;
    }
  }
}
