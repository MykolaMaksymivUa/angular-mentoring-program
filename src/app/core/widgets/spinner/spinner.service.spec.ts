import { TestBed } from '@angular/core/testing';
import { SpinnerService } from '..';


describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpinnerService],
    });
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('spinner should be hidden after method hide', () => {
    service.hide();

    expect(service.isVisible()).toBe(false);
  });

  it('spinner should be visible after method show', () => {
    service.show();

    expect(service.isVisible()).toBe(true);
  });
});
