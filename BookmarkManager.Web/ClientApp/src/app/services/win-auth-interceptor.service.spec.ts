import { TestBed } from '@angular/core/testing';

import { WinAuthInterceptorService } from './win-auth-interceptor.service';

describe('WinAuthInterceptorService', () => {
  let service: WinAuthInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinAuthInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
