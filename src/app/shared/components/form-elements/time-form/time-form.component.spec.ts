import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeConverterPipe } from 'src/app/shared/pipes';

import { TimeFormComponent } from './time-form.component';

describe('TimeFormComponent', () => {
  let component: TimeFormComponent;
  let fixture: ComponentFixture<TimeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeFormComponent, TimeConverterPipe]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
