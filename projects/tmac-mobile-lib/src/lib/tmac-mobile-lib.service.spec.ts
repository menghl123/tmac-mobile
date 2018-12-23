import { TestBed } from '@angular/core/testing';

import { TmacMobileLibService } from './tmac-mobile-lib.service';

describe('TmacMobileLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TmacMobileLibService = TestBed.get(TmacMobileLibService);
    expect(service).toBeTruthy();
  });
});
