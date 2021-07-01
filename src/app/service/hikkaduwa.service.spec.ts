import { TestBed } from '@angular/core/testing';

import { HikkaduwaService } from './hikkaduwa.service';

describe('HikkaduwaService', () => {
  let service: HikkaduwaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HikkaduwaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
