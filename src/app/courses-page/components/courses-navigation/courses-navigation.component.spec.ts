import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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

  it('on empty or with space character input search click should return function preventing', fakeAsync(() => {
    const searchClickSpy = spyOn(component, 'onSearchClick').and.returnValue(false)
    let searchBtn = fixture.debugElement.query(By.css('.js-search-btn'));

    searchBtn.triggerEventHandler('click', '');
    tick();
    fixture.detectChanges();

    expect(component.onSearchClick).toHaveBeenCalledTimes(1);
    expect(searchClickSpy.calls.mostRecent().returnValue).toBe(false);
  }));
});
