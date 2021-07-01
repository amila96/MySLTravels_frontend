import { TestBed } from '@angular/core/testing';

import { NuwaraEliyaService } from './nuwara-eliya.service';

describe('NuwaraEliyaService', () => {
  let service: NuwaraEliyaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuwaraEliyaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
