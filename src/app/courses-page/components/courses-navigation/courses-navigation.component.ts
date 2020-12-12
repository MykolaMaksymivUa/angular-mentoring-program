import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wb-courses-navigation',
  templateUrl: './courses-navigation.component.html',
  styleUrls: ['./courses-navigation.component.less'],
})
export class CoursesNavigationComponent implements OnInit {
  @Output() searchClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void { }

  onSearchClick(term: string): void {
    console.log(`Search by ${term}`);
    this.searchClick.emit(term);
  }
}
