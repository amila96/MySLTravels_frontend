import { TestBed } from '@angular/core/testing';

import { HortonPlainsService } from './horton-plains.service';

describe('HortonPlainsService', () => {
  let service: HortonPlainsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HortonPlainsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
