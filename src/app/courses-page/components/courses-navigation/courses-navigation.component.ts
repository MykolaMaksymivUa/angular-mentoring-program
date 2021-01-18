import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { of, Subject, Subscription } from 'rxjs';
import { debounceTime, map, catchError, distinctUntilChanged, mergeMap, delay, tap } from 'rxjs/operators';

@Component({
  selector: 'wb-courses-navigation',
  templateUrl: './courses-navigation.component.html',
  styleUrls: ['./courses-navigation.component.less'],
})
export class CoursesNavigationComponent implements OnInit, OnDestroy {
  @Output() searchTerm = new EventEmitter<string>();
  private subscription: Subscription;
  keyUp$ = new Subject<KeyboardEvent>();

  constructor() {
    this.subscription = this.keyUp$.pipe(
      tap(value => console.log(value)),
      debounceTime(300),
      distinctUntilChanged(),
      mergeMap(search => of(search).pipe(
        delay(300),
      )),
    ).subscribe((searchTerm: any) => this.searchTerm.emit(searchTerm));
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
