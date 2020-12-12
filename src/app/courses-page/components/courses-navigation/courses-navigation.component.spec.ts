import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

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

  it('onSearchClick should raises and only once', (done: DoneFn) => {
    component.searchClick.subscribe((term: string) => {
      expect(term).toBe(' ');
      done();
    })

    component.onSearchClick(' ');
  });

});
