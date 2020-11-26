import { TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';

describe('DialogService', () => {
  let service: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('confirm dialog should be called once', () => {
    spyOn(window, 'confirm');
    service.confirm('Delete item?')

    expect(window.confirm).toHaveBeenCalledWith('Delete item?');
    expect(window.confirm).toHaveBeenCalledTimes(1);
  });
});
