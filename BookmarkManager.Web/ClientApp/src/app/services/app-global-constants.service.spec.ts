import { TestBed } from '@angular/core/testing';

import { AppGlobalConstantsService } from './app-global-constants.service';

describe('AppGlobalConstantsService', () => {
  let service: AppGlobalConstantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppGlobalConstantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
