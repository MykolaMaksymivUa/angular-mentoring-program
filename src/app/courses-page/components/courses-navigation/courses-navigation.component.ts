import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wb-courses-navigation',
  templateUrl: './courses-navigation.component.html',
  styleUrls: ['./courses-navigation.component.less'],
})
export class CoursesNavigationComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  onSearchClick(term: string): boolean | void {
    if (!term.trim()) {
      return false;
    }

    console.log(`Search by ${term}`);
  }
}
