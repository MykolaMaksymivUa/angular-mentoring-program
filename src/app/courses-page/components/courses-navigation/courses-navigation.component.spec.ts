import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { CoursesNavigationComponent } from './courses-navigation.component';

describe('CoursesNavigationComponent', () => {
  let component: CoursesNavigationComponent;
  let fixture: ComponentFixture<CoursesNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesNavigationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('onSearchClick should raises and only once', (done: DoneFn) => {
  //   const keyEvent = new KeyboardEvent('keyup', { code: 'KeyA' })
  //   component.keyUp$.subscribe(term => {
  //     debugger;

  //     expect(term).toBe('abc');
  //     done();
  //   })

  //   component.keyUp$.next(keyEvent);
  // });

});
