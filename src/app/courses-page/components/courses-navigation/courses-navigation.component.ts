import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wb-courses-navigation',
  templateUrl: './courses-navigation.component.html',
  styleUrls: ['./courses-navigation.component.less'],
})
export class CoursesNavigationComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  onSearchClick(term: string) {
    term.length && console.log(`Search by ${term}`);
  }
}
