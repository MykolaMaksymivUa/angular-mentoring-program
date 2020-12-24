import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsFormComponent } from './chips-form.component';

describe('ChipsFormComponent', () => {
  let component: ChipsFormComponent;
  let fixture: ComponentFixture<ChipsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
