import { TestBed } from '@angular/core/testing';

import { BentotaReviewService } from './bentota-review.service';

describe('BentotaReviewService', () => {
  let service: BentotaReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BentotaReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
