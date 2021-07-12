import { TestBed } from '@angular/core/testing';

import { OwnTourPackageService } from './own-tour-package.service';

describe('OwnTourPackageService', () => {
  let service: OwnTourPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnTourPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
