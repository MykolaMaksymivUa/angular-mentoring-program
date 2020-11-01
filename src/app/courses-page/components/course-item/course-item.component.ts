import { Component, OnInit } from '@angular/core';
import { Course } from '../../models';

@Component({
  selector: 'wb-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.less']
})
//@todo delete Course interface from fake component.
export class CourseItemComponent implements OnInit, Course {
  id: string | number;
  title: string;
  creationDate: Date;
  duration: number;
  description?: string;

  constructor() { }

  ngOnInit(): void {
    this.id = 12121;
    this.title = 'TypeScript intro';
    this.creationDate = new Date();
    this.duration = 25;
    this.description = 'Diam dolore et invidunt tempor vero sadipscing voluptua ipsum duo est, magna duo amet eos.';
  }

}
