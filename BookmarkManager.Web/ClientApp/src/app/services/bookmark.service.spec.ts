import { TestBed } from '@angular/core/testing';

import { BookmarkService } from './bookmark.service';

describe('BoomarkService', () => {
  let service: BoomarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoomarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
