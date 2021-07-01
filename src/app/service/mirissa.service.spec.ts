import { TestBed } from '@angular/core/testing';

import { MirissaService } from './mirissa.service';

describe('MirissaService', () => {
  let service: MirissaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MirissaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
