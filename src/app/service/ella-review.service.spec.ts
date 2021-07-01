import { TestBed } from '@angular/core/testing';

import { EllaReviewService } from './ella-review.service';

describe('EllaReviewService', () => {
  let service: EllaReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EllaReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
