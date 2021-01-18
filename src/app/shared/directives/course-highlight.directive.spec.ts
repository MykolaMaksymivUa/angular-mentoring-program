import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourseHighlightDirective } from './course-highlight.directive';

@Component({
  template: `
  <h2 [wbCourseHighlight]="futureDate">Blue Color</h2>
  <h2 [wbCourseHighlight]="relevantDate.toISOString()">Green Color</h2>
  <h2 class="lastH2">No Highlight</h2>`
})
class TestComponent {
  futureDate = '2021-04-14T08:15:30+00:00'
  relevantDate = new Date();

  constructor() {
    this.relevantDate.setDate(this.relevantDate.getDate() - 15);
  }
}

describe('CourseHighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];
  let bareH2: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [CourseHighlightDirective, TestComponent]
    }).createComponent(TestComponent);

    fixture.detectChanges();

    des = fixture.debugElement.queryAll(By.directive(CourseHighlightDirective));
    bareH2 = fixture.debugElement.query(By.css('h2.lastH2'));
    console.log(bareH2);
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });

  // color tests
  it('should have 2 highlighted elements', () => {
    expect(des.length).toBe(2);
  });

  it('border color of 1st <h2> should have class "highlight-border--green"', () => {
    expect(des[0].nativeElement.classList.contains('highlight-border--green')).toBe(true);
  });

  it('border color of 2nd <h2> should not have class "highlight-border--blue"', () => {
    expect(des[1].nativeElement.classList.contains('highlight-border--blue')).toBe(false);
  });

  it('border color of 3rd <h2> should not to have class "highlight-border--blue" or "highlight-border--green"', () => {
    const lastHeaderClassList = bareH2.nativeElement.classList;

    expect(lastHeaderClassList.contains('highlight-border--blue')).toBe(false);
    expect(lastHeaderClassList.contains('highlight-border--green')).toBe(false);
  });
});
