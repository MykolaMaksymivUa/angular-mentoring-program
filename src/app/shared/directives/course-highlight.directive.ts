import { Directive, ElementRef, Input, Renderer2, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[wbCourseHighlight]'
})
export class CourseHighlightDirective implements OnInit {
  @Input('wbCourseHighlight') date: string | Date;
  @HostBinding('class') elementClass;
  private readonly releaseBuffer: number = 14;

  futureCourseColor = 'green';
  relevantCourseColor = 'blue';

  constructor() { }

  ngOnInit(): void {
    const currentDate = new Date().getDate();
    const creationDate = new Date(this.date).getDate();
    const isFutureRelease = creationDate > currentDate;

    if (isFutureRelease) {
      this.elementClass = `highlight-border--${this.futureCourseColor}`;
    } else if (!isFutureRelease && creationDate >= new Date().setDate(currentDate - this.releaseBuffer)) {
      this.elementClass = `highlight-border--${this.relevantCourseColor}`;
    }
  }
}
