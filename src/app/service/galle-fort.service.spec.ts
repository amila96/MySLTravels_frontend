import { TestBed } from '@angular/core/testing';

import { GalleFortService } from './galle-fort.service';

describe('GalleFortService', () => {
  let service: GalleFortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleFortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
