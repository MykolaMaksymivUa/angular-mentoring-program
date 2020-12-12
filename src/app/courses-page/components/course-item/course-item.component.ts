import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../models';

@Component({
  selector: 'wb-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  @Output() courseEdit = new EventEmitter<number>();
  @Output() courseDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onCourseEdit() {
    this.courseEdit.emit(+this.course.id);
  }

  onCourseDelete() {
    this.courseDelete.emit(+this.course.id);
  }
}
